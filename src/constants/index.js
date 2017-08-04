
/*
  user section
  user section
  user section
*/




//User action type
export const REGISTER = 'REGISTER';
export const REGISTER_ERROR = 'REGISTER_ERROR';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';


//request sms code action type
export const REQUEST_SMS_CODE = 'REQUEST_SMS_CODE';
export const REQUEST_SMS_CODE_ERROR = 'REQUEST_SMS_CODE_ERROR';
export const REQUEST_SMS_CODE_SUCCESS = 'REQUEST_SMS_CODE_SUCCESS';

//verify send message action type
export const REGISTER_SEND_MESSAGE = 'REGISTER_SEND_MESSAGE';
export const REGISTER_SEND_MESSAGE_ERROR = 'REGISTER_SEND_MESSAGE_ERROR';
export const REGISTER_SEND_MESSAGE_SUCCESS = 'REGISTER_SEND_MESSAGE_SUCCESS';

export const LOGOUT = 'LOGOUT';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

//change password action constants
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
export const CHANGE_PASSWORD_SUCCESS = 'CHANGE_PASSWORD_SUCCESS';
export const CHANGE_PASSWORD_ERROR = 'CHANGE_PASSWORD_ERROR';

export const CLEAR_PASSWORD_STATE = 'CLEAR_PASSWORD_STATE';

//change password action constants
export const FEEDBACK = 'FEEDBACK';
export const FEEDBACK_SUCCESS = 'FEEDBACK_SUCCESS';
export const FEEDBACK_ERROR = 'FEEDBACK_ERROR';

export const CLEAR_FEEDBACK_STATE = 'CLEAR_FEEDBACK_STATE';

//after show the error toast and then clear it
export const CLEAR_STATE = 'CLEAR_STATE';
export const CLEAR_FAV_STATE = 'CLEAR_FAV_STATE';
export const CLEAR = 'CLEAR';

//clear token in the storage
export const CLEAR_TOKEN = 'CLEAR_TOKEN';
export const SET_TOKEN = 'SET_TOKEN';


/*
  user data section
  user data section
  user data section
*/






//patient get profile action constants
export const GET_PATIENT_PROFILE = 'GET_PATIENT_PROFILE';
export const GET_PATIENT_PROFILE_SUCCESS = 'GET_PATIENT_PROFILE_SUCCESS';
export const GET_PATIENT_PROFILE_ERROR = 'GET_PATIENT_PROFILE_ERROR';

//patient modify profile action constants
export const UPDATE_PATIENT_PROFILE = 'UPDATE_PATIENT_PROFILE';
export const UPDATE_PATIENT_PROFILE_SUCCESS = 'UPDATE_PATIENT_PROFILE_SUCCESS';
export const UPDATE_PATIENT_PROFILE_ERROR = 'UPDATE_PATIENT_PROFILE_ERROR';

export const CLEAR_SUBMIT_STATE = 'CLEAR_SUBMIT_STATE';

//patient question list
export const GET_PATIENT_QUESTIONS = 'GET_PATIENT_QUESTIONS';
export const GET_PATIENT_QUESTIONS_SUCCESS = 'GET_PATIENT_QUESTIONS_SUCCESS';
export const GET_PATIENT_QUESTIONS_ERROR = 'GET_PATIENT_QUESTIONS_ERROR';

//patient star question list
export const GET_PATIENT_STARRED_QUESTIONS = 'GET_PATIENT_STARRED_QUESTIONS';
export const GET_PATIENT_STARRED_QUESTIONS_SUCCESS = 'GET_PATIENT_STARRED_QUESTIONS_SUCCESS';
export const GET_PATIENT_STARRED_QUESTIONS_ERROR = 'GET_PATIENT_STARRED_QUESTIONS_ERROR';

//patient fav doctor list
export const GET_PATIENT_FAV_DOCTORS = 'GET_PATIENT_FAV_DOCTORS';
export const GET_PATIENT_FAV_DOCTORS_SUCCESS = 'GET_PATIENT_FAV_DOCTORS_SUCCESS';
export const GET_PATIENT_FAV_DOCTORS_ERROR = 'GET_PATIENT_FAV_DOCTORS_ERROR';

//patient fav post list
export const GET_PATIENT_FAV_POSTS = 'GET_PATIENT_FAV_POSTS';
export const GET_PATIENT_FAV_POSTS_SUCCESS = 'GET_PATIENT_FAV_POSTS_SUCCESS';
export const GET_PATIENT_FAV_POSTS_ERROR = 'GET_PATIENT_FAV_POSTS_ERROR';

//patient service list
export const GET_PATIENT_SERVICES = 'GET_PATIENT_SERVICES';
export const GET_PATIENT_SERVICES_SUCCESS = 'GET_PATIENT_SERVICES_SUCCESS';
export const GET_PATIENT_SERVICES_ERROR = 'GET_PATIENT_SERVICES_ERROR';



/*
  home section
  home section
  home section
*/


//main screen fetch data section
//export const
//POSTS actions constants
export const GET_POSTS = 'GET_POSTS';
export const GET_POSTS_ERROR = 'GET_POSTS_ERROR';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';


//single POST  actions constants
export const GET_SINGLE_POST = 'GET_SINGLE_POST';
export const GET_SINGLE_POST_ERROR = 'GET_SINGLE_POST_ERROR';
export const GET_SINGLE_POST_SUCCESS = 'GET_SINGLE_POST_SUCCESS';


// FAV single POST  actions constants
export const ADD_SINGLE_POST_FAV = 'ADD_SINGLE_POST_FAV';
export const ADD_SINGLE_POST_FAV_ERROR = 'ADD_SINGLE_POST_FAV_ERROR';
export const ADD_SINGLE_POST_FAV_SUCCESS = 'ADD_SINGLE_POST_FAV_SUCCESS';

// CANCEL single POST  fav actions constants
export const CANCEL_SINGLE_POST_FAV = 'CANCEL_SINGLE_POST_FAV';
export const CANCEL_SINGLE_POST_FAV_ERROR = 'CANCEL_SINGLE_POST_FAV_ERROR';
export const CANCEL_SINGLE_POST_FAV_SUCCESS = 'CANCEL_SINGLE_POST_FAV_SUCCESS';

//HOSPITALS actions constants
export const GET_HOSPITALS = 'GET_HOSPITALS';
export const GET_HOSPITALS_ERROR = 'GET_HOSPITALS_ERROR';
export const GET_HOSPITALS_SUCCESS = 'GET_HOSPITALS_SUCCESS';


//single HOSPITAL  actions constants
export const GET_SINGLE_HOSPITAL = 'GET_SINGLE_HOSPITAL';
export const GET_SINGLE_HOSPITAL_ERROR = 'GET_SINGLE_HOSPITAL_ERROR';
export const GET_SINGLE_HOSPITAL_SUCCESS = 'GET_SINGLE_HOSPITAL_SUCCESS';

//single HOSPITAL DOCTOR LISTS actions constants
export const GET_SINGLE_HOSPITAL_DOCTORS = 'GET_SINGLE_HOSPITAL_DOCTORS';
export const GET_SINGLE_HOSPITAL_DOCTORS_ERROR = 'GET_SINGLE_HOSPITAL_DOCTORS_ERROR';
export const GET_SINGLE_HOSPITAL_DOCTORS_SUCCESS = 'GET_SINGLE_HOSPITAL_DOCTORS_SUCCESS';

//DOCTORS actions constants
export const GET_DOCTORS = 'GET_DOCTORS';
export const GET_DOCTORS_ERROR = 'GET_DOCTORS_ERROR';
export const GET_DOCTORS_SUCCESS = 'GET_DOCTORS_SUCCESS';

//DOCTORS actions constants
export const GET_SINGLE_DOCTOR = 'GET_SINGLE_DOCTOR';
export const GET_SINGLE_DOCTOR_ERROR = 'GET_SINGLE_DOCTOR_ERROR';
export const GET_SINGLE_DOCTOR_SUCCESS = 'GET_SINGLE_DOCTOR_SUCCESS';


//single DOCTORS INFO  actions constants
export const GET_SINGLE_DOCTOR_INFO = 'GET_SINGLE_DOCTOR_INFO';
export const GET_SINGLE_DOCTOR_INFO_ERROR = 'GET_SINGLE_DOCTOR_INFO_ERROR';
export const GET_SINGLE_DOCTOR_INFO_SUCCESS = 'GET_SINGLE_DOCTOR_INFO_SUCCESS';

//single DOCTORS FAV  actions constants
export const ADD_SINGLE_DOCTOR_FAV = 'ADD_SINGLE_DOCTOR_FAV';
export const ADD_SINGLE_DOCTOR_FAV_ERROR = 'ADD_SINGLE_DOCTOR_FAV_ERROR';
export const ADD_SINGLE_DOCTOR_FAV_SUCCESS = 'ADD_SINGLE_DOCTOR_FAV_SUCCESS';

//cancel single DOCTORS FAV  actions constants
export const CANCEL_SINGLE_DOCTOR_FAV = 'CANCEL_SINGLE_DOCTOR_FAV';
export const CANCEL_SINGLE_DOCTOR_FAV_ERROR = 'CANCEL_SINGLE_DOCTOR_FAV_ERROR';
export const CANCEL_SINGLE_DOCTOR_FAV_SUCCESS = 'CANCEL_SINGLE_DOCTOR_FAV_SUCCESS';

//single DOCTORS ANSWERS actions constants
export const GET_SINGLE_DOCTOR_ANSWERS = 'GET_SINGLE_DOCTOR_ANSWERS';
export const GET_SINGLE_DOCTOR_ANSWERS_ERROR = 'GET_SINGLE_DOCTOR_ANSWERS_ERROR';
export const GET_SINGLE_DOCTOR_ANSWERS_SUCCESS = 'GET_SINGLE_DOCTOR_ANSWERS_SUCCESS';

//single DOCTORS COMMENTS actions constants
export const GET_SINGLE_DOCTOR_COMMENTS = 'GET_SINGLE_DOCTOR_COMMENTS';
export const GET_SINGLE_DOCTOR_COMMENTS_ERROR = 'GET_SINGLE_DOCTOR_COMMENTS_ERROR';
export const GET_SINGLE_DOCTOR_COMMENTS_SUCCESS = 'GET_SINGLE_DOCTOR_COMMENTS_SUCCESS';

//single DOCTORS  CREATE COMMENTS actions constants
export const CREATE_SINGLE_DOCTOR_COMMENTS = 'CREATE_SINGLE_DOCTOR_COMMENTS';
export const CREATE_SINGLE_DOCTOR_COMMENTS_ERROR = 'CREATE_SINGLE_DOCTOR_COMMENTS_ERROR';
export const CREATE_SINGLE_DOCTOR_COMMENTS_SUCCESS = 'CREATE_SINGLE_DOCTOR_COMMENTS_SUCCESS';

export const CLEAR_COMMENT = 'CLEAR_COMMENT';
export const CLEAR_COMMENT_STATE = 'CLEAR_COMMENT_STATE';




/*
  qa section
  qa section
  qa section
*/

//get questions action constants
export const GET_QUESTIONS = 'GET_QUESTIONS';
export const GET_QUESTIONS_SUCCESS = 'GET_QUESTIONS_SUCCESS';
export const GET_QUESTIONS_ERROR = 'GET_QUESTIONS_ERROR';

//get single question action constants
export const GET_SINGLE_QUESTION = 'GET_SINGLE_QUESTION';
export const GET_SINGLE_QUESTION_SUCCESS = 'GET_SINGLE_QUESTION_SUCCESS';
export const GET_SINGLE_QUESTION_ERROR = 'GET_SINGLE_QUESTION_ERROR';

//update single question action constants
export const UPDATE_SINGLE_QUESTION = 'UPDATE_SINGLE_QUESTION';
export const UPDATE_SINGLE_QUESTION_SUCCESS = 'UPDATE_SINGLE_QUESTION_SUCCESS';
export const UPDATE_SINGLE_QUESTION_ERROR = 'UPDATE_SINGLE_QUESTION_ERROR';

//get single question all img action constants
export const GET_SINGLE_QUESTION_ALL_IMG = 'GET_SINGLE_QUESTION_ALL_IMG';
export const GET_SINGLE_QUESTION_ALL_IMG_SUCCESS = 'GET_SINGLE_QUESTION_ALL_IMG_SUCCESS';
export const GET_SINGLE_QUESTION_ALL_IMG_ERROR = 'GET_SINGLE_QUESTION_ALL_IMG_ERROR';

//get single question all answers action constants
export const GET_SINGLE_QUESTION_ALL_ANSWERS = 'GET_SINGLE_QUESTION_ALL_ANSWERS';
export const GET_SINGLE_QUESTION_ALL_ANSWERS_SUCCESS = 'GET_SINGLE_QUESTION_ALL_ANSWERS_SUCCESS';
export const GET_SINGLE_QUESTION_ALL_ANSWERS_ERROR = 'GET_SINGLE_QUESTION_ALL_ANSWERS_ERROR';

//update single question action constants
export const GET_SINGLE_QUESTION_ANSWER = 'GET_SINGLE_QUESTION_ANSWER';
export const GET_SINGLE_QUESTION_ANSWER_SUCCESS = 'GET_SINGLE_QUESTION_ANSWER_SUCCESS';
export const GET_SINGLE_QUESTION_ANSWER_ERROR = 'GET_SINGLE_QUESTION_ANSWER_ERROR';

//get single answer all question
export const GET_SINGLE_ANSWER_ALL_COMMENTS = 'GET_SINGLE_ANSWER_ALL_COMMENTS';
export const GET_SINGLE_ANSWER_ALL_COMMENTS_SUCCESS = 'GET_SINGLE_ANSWER_ALL_COMMENTS_SUCCESS';
export const GET_SINGLE_ANSWER_ALL_COMMENTS_ERROR = 'GET_SINGLE_ANSWER_ALL_COMMENTS_ERROR';

//create single question answer action constants
export const CREATE_SINGLE_QUESTION_ANSWER = 'CREATE_SINGLE_QUESTION_ANSWER';
export const CREATE_SINGLE_QUESTION_ANSWER_SUCCESS = 'CREATE_SINGLE_QUESTION_ANSWER_SUCCESS';
export const CREATE_SINGLE_QUESTION_ANSWER_ERROR = 'CREATE_SINGLE_QUESTION_ANSWER_ERROR';

//create single question answer comment action constants
export const CREATE_SINGLE_QUESTION_ANSWER_COMMENT = 'CREATE_SINGLE_QUESTION_ANSWER_COMMENT';
export const CREATE_SINGLE_QUESTION_ANSWER_COMMENT_SUCCESS = 'CREATE_SINGLE_QUESTION_ANSWER_COMMENT_SUCCESS';
export const CREATE_SINGLE_QUESTION_ANSWER_COMMENT_ERROR = 'CREATE_SINGLE_QUESTION_ANSWER_COMMENT_ERROR';

//upvote single question answer action constants
export const UPVOTE_SINGLE_QUESTION_ANSWER = 'UPVOTE_SINGLE_QUESTION_ANSWER';
export const UPVOTE_SINGLE_QUESTION_ANSWER_SUCCESS = 'UPVOTE_SINGLE_QUESTION_ANSWER_SUCCESS';
export const UPVOTE_SINGLE_QUESTION_ANSWER_ERROR = 'UPVOTE_SINGLE_QUESTION_ANSWER_ERROR';

//star single question action constants
export const STAR_SINGLE_QUESTION = 'STAR_SINGLE_QUESTION';
export const STAR_SINGLE_QUESTION_SUCCESS = 'STAR_SINGLE_QUESTION_SUCCESS';
export const STAR_SINGLE_QUESTION_ERROR = 'STAR_SINGLE_QUESTION_ERROR';

//cancel star single question action constants
export const CANCEL_STAR_SINGLE_QUESTION = 'CANCEL_STAR_SINGLE_QUESTION';
export const CANCEL_STAR_SINGLE_QUESTION_SUCCESS = 'CANCEL_STAR_SINGLE_QUESTION_SUCCESS';
export const CANCEL_STAR_SINGLE_QUESTION_ERROR = 'CANCEL_STAR_SINGLE_QUESTION_ERROR';

//get single question all comments action constants
export const GET_SINGLE_QUESTION_ALL_COMMENTS = 'GET_SINGLE_QUESTION_ALL_COMMENTS';
export const GET_SINGLE_QUESTION_ALL_COMMENTS_SUCCESS = 'GET_SINGLE_QUESTION_ALL_COMMENTS_SUCCESS';
export const GET_SINGLE_QUESTION_ALL_COMMENTS_ERROR = 'GET_SINGLE_QUESTION_ALL_COMMENTS_ERROR';


//create question action constants
export const CREATE_SINGLE_QUESTION = 'CREATE_SINGLE_QUESTION';
export const CREATE_SINGLE_QUESTION_SUCCESS = 'CREATE_SINGLE_QUESTION_SUCCESS';
export const CREATE_SINGLE_QUESTION_ERROR = 'CREATE_SINGLE_QUESTION_ERROR';

//delete question action constants
export const DELETE_SINGLE_QUESTION = 'DELETE_SINGLE_QUESTION';
export const DELETE_SINGLE_QUESTION_SUCCESS = 'DELETE_SINGLE_QUESTION_SUCCESS';
export const DELETE_SINGLE_QUESTION_ERROR = 'DELETE_SINGLE_QUESTION_ERROR';

//add  question img action constants
export const ADD_SINGLE_QUESTION_IMG = 'ADD_SINGLE_QUESTION_IMG';
export const ADD_SINGLE_QUESTION_IMG_SUCCESS = 'ADD_SINGLE_QUESTION_IMG_SUCCESS';
export const ADD_SINGLE_QUESTION_IMG_ERROR = 'ADD_SINGLE_QUESTION_IMG_ERROR';

//for question create success jump
export const JUMP_TO_QA = 'JUMP_TO_QA';


/*
  service section
  service section
  service section
*/

export const GET_CLIENT_IP = 'GET_CLIENT_IP';
export const GET_CLIENT_IP_SUCCESS = 'GET_CLIENT_IP_SUCCESS';
export const GET_CLIENT_IP_ERROR = 'GET_CLIENT_IP_ERROR';

export const CREATE_NEW_ORDER = 'CREATE_NEW_ORDER';
export const CREATE_NEW_ORDER_SUCCESS = 'CREATE_NEW_ORDER_SUCCESS';
export const CREATE_NEW_ORDER_ERROR = 'CREATE_NEW_ORDER_ERROR';


export const CANCEL_ORDER = 'CANCEL_ORDER';
export const CANCEL_ORDER_SUCCESS = 'CANCEL_ORDER_SUCCESS';
export const CANCEL_ORDER_ERROR = 'CANCEL_ORDER_ERROR';

export const PAY = 'PAY';
export const PAY_SUCCESS = 'PAY_SUCCESS';
export const PAY_ERROR = 'PAY_ERROR';

export const REFUND = 'REFUND';
export const REFUND_SUCCESS = 'REFUND_SUCCESS';
export const REFUND_ERROR = 'REFUND_ERROR';

export const FINISH_ORDER = 'FINISH_ORDER';
export const FINISH_ORDER_SUCCESS = 'FINISH_ORDER_SUCCESS';
export const FINISH_ORDER_ERROR = 'FINISH_ORDER_ERROR';


export const CLEAR_SERVICE_STATE = 'CLEAR_SERVICE_STATE';