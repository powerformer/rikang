
//tab bar item
const ITEMS = [
      '我的问题',
      '我的咨询',
      '我的收藏',
];

const jumpToScreenLists = [
  'FavProblemList',
  'PatientServiceList',
  'DoctorList',
];

const MAP_PAID_STATUS ={
   'U':   'unpaid',
   'P':     'paid',
   'W': 'underway',
   'R':   'refund',
   'F': 'finished',
};


const handleUserData = (data, kind, status, doctors) => {
  //the last params doctors is for get the service item doctor name
  let dataSource = [];

  data.map((item) => {
    if (kind === 'questions') {
      if (status === 'solved' && !item.get('solved')) {
        return;
      }
      if (status === 'unsolved' && item.get('solved')) {
        return;
      }
    }

    if (kind === 'services') {
      if (status === 'underway' && MAP_PAID_STATUS[item.get('status')] !== 'underway') {
        return;
      }

      if (status === 'paid' && MAP_PAID_STATUS[item.get('status')] !== 'paid') {
        return;
      }

      if (status === 'finished' && MAP_PAID_STATUS[item.get('status')] !== 'finished') {
        return;
      }
    }



      item = item.toJS();
      const { id } = item;

      //nameItem and avatarItem is a trick 
      // which i use for kind === services to get the doctor name and avatar
      // because, the back-end not supply, and I am so lazy. = =!
      let nameItem = {};
      let avatarItem = {};
      let keyItem = {};

      if (kind === 'services') {
        const { service_object } = item;
        const { doctor } = service_object;
        doctors.map(doc => {
          if (doc.get('id') === doctor) {
            nameItem = {
              name: doc.get('name'),
            };
            
            avatarItem = {
              avatar: doc.get('avatar'),
            };

            keyItem = {
              key: item.order_no
            }

            console.log('keyItem', keyItem)
          }
        })
      }

      dataSource.push({
          ...item,
          ...nameItem,
          ...avatarItem,
          key: id,
          ...keyItem,
        });
    });
  return {
    data: dataSource,
    count: dataSource.length,
  };
};

export {
  ITEMS,
  handleUserData,
  jumpToScreenLists,
}