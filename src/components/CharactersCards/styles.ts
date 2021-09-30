import styled from 'styled-components';



export const Container = styled.div`
  margin-top: 40px;

  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-left: 0;
    justify-content: space-between;

    li {
      max-width: 300px;
      list-style: none;
      margin-bottom: 1rem;

      @media (min-width: 920px){
      margin: 1rem 0rem;
      }

      img {
        max-width: 100%;
      }
      .card-body {
        height: 150px;
        .card-text {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;  
        overflow: hidden;
        }
      }
    }
  }

  
`;













// export const Container = styled.div`
//   margin-top: 40px;

//   table {
//     width: 100%;
//     border-spacing: 0 8px;

//     th {
//       padding: 0px 24px;
//       font-size: 12px;
//       font-weight: 400;
//       color: var(--smoke);
//       text-align: left;
//     }

//     ul {
//       tr {
//         box-shadow: 0px 0px 5px #00000033;
//       }

//       li {
//         padding: 20px 24px;
//         border: 0;
//         background: #fff;
//         color: var(--dark-smoke);
//         text-align: left;

//         &:first-child {
//           padding-right: 0;
//           width: 48px;
//           border-top-left-radius: 4px;
//           border-bottom-left-radius: 4px;
//         }

//         &:last-child {
//           border-top-right-radius: 4px;
//           border-bottom-right-radius: 4px;
//         }

//         span.hide-series, span.hide-events {
//           display: none;
//         }

//         span.show-series, span.show-events {
//           display: block;
//         }

//         button {
//           margin-top: 8px;
//           padding: 2px 8px;
//           font-size: 12px;
//           font-weight: 700;
//           color: var(--dark-smoke);
//           background: none;
//           border: solid 1px var(--dark-snow);
//           border-radius: 4px;
//         }
//       }
//     }

//     @media screen and (max-width: 600px) {
//       tr th:nth-child(2), tr th:nth-child(3),
//       tr td:nth-child(3), tr td:nth-child(4) {
//         display: none;
//       }

//       tr td:nth-child(2) {
//         border-top-right-radius: 4px;
//         border-bottom-right-radius: 4px;
//       }
//     }
//   }
// `;

 export const CharacterAvatar = styled.div`
   width: 48px;
   height: 48px;
   border-radius: 4px;
   overflow: hidden;

   img {
     width: 100%;
     height: 100%;
     object-fit: cover;
   }
 `;
