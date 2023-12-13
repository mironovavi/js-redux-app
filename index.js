import store from './redux/store.js';
// import getCurrentTime from './utils/getCurrentTime.js';
import { addCurrentTime, clearAllTimes } from './redux/actionCreators.js';

const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
  //   store.dispatch({ type: 'ADD_CURRENT_TIME', payload: getCurrentTime() });
  store.dispatch(addCurrentTime());
});

const btnClearTime = document.getElementById('clearTimes');
btnClearTime.addEventListener('click', () => {
  //   store.dispatch({ type: 'CLEAR_ALL_TIMES' });
  store.dispatch(clearAllTimes());
});

const timesList = document.getElementById('timesList');
store.subscribe(() => {
  timesList.innerHTML = '';
  const times = store.getState();
  times.forEach((elem) => {
    let li = document.createElement('li');
    li.innerText = elem;
    timesList.appendChild(li);
  });
});

// //подписка на все изменения внутри магазина, автоматические уведомления
// const unsubscribe = store.subscribe(() => {
//   console.log(`Redux has just changed: ${store.getState()}`);
// });
// store.dispatch({ type: 'ADD_CURRENT_TIME', payload: '11:30:30' });
// unsubscribe(); //отписка от автоматических уведомлений
// store.dispatch({ type: 'ADD_CURRENT_TIME', payload: '11:32:30' });
// store.dispatch({ type: 'CLEAR_ALL_TIMES' });
