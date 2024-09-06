import close from './images/close.svg';
import leftArrow from './images/leftArrow.svg';
import rightArrow from './images/leftArrow.svg';
import downArrow from './images/downArrow.svg';
import upArrow from './images/upArrow.svg';
import backArrow from './images/backArrow.svg';
import forwardArrow from './images/forwardArrow.svg';
import upload from './images/upload.svg';
import save from './images/save.svg';
import search from './images/search.svg';
import send from './images/send.svg';
import trash from './images/trash.svg';
import warning from './images/warning.svg';
import error from './images/error.svg';
import success from './images/success.svg';
import information from './images/information.svg';
import setting from './images/setting.svg';
import datepicker from './images/datepicker.svg';
import person from './images/person.svg';
import loading from './images/loading.svg';
import message from './images/message.svg';
import bellOn from './images/bellOn.svg';
import bellOff from './images/bellOff.svg';
import previewOn from './images/previewOn.svg';
import previewOff from './images/previewOff.svg';
import retry from './images/retry.svg';

// 사용법: src부분에 {images.close} 삽입

type IndexedAssetObject = {
  [key: string]: IndexedAssetObject | any;
};

export const images: IndexedAssetObject = {
  close,
  leftArrow,
  rightArrow,
  downArrow,
  upArrow,
  forwardArrow,
  backArrow,
  upload,
  save,
  search,
  send,
  trash,
  warning,
  error,
  success,
  information,
  setting,
  datepicker,
  person,
  loading,
  message,
  bellOn,
  bellOff,
  previewOn,
  previewOff,
  retry,
};
