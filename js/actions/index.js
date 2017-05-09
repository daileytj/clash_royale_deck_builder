// import 'isomorphic-fetch';
//
// export const GET_ALL_CARDS_SUCCESS = 'GET_ALL_CARDS_SUCCESS';
// export const getAllCardsSuccess = () => ({
//     type: GET_ALL_CARDS_SUCCESS,
//     cards
// });
//
// export const getAllCards = () => dispatch => {
//   const url = 'http://www.clashapi.xyz/cards';
//   return fetch(url).then(response => {
//       if (!response.ok) {
//           throw new Error(response.statusText);
//       }
//       return response;
//   })
//       .then(response => response.json())
//       .then(data => {
//           dispatch(getAllCardsSuccess(data.cards));
//           })
//       .catch(error =>
//              console.log(error)
//             );
// };

export const getAllAvailableCards = cards => {
  return {
    type: 'GET_ALL_AVAILABLE_CARDS',
    cards
  }
}
