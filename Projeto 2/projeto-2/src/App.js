import './App.css';
import './index.js';

function deletar() {
  for( var i = 0; i < names.length; i++ ){
    if (names[i] == "id") {
      names.splice(i, 1);
      surnames.splice(i, 1);
      emails.splice(i, 1);
      dates.splice(i, 1);
    }
  }
  return (
    names, surnames, emails, splice
  );
}

const deleteButton = <button className='delete_button' onClick={deletar()}>deletar</button>

var names = ["Lauren", "Ardenia", "Renaldo", "Nichole", "Haywood Daintry", "Leslie Daile", "Byrann Slorance", "My Swendell", "Brier Esson", "Seth Piddle", "Fer Piddle"];

var surnames = ["Shaxby", "Paddingdon", "Alenichev", "OHeneghan", "Daintry", "Daile", "Slorance", "Swendell", "Esson", "Piddle", "Piddle"]

var emails = ["Ishaxby0@php.net", "apaddingdon1@nsw.gov.au", "ralenichev2@ftc.gov", "noheneghan3@flavors.me", "hdaintry4@nhs.uk", "Idaile5@vimeo.com", "bslorance6@kickstarter.com", "mswendell7@moonfruit.com", "besson8@usa.gov", "spiddle9@nationalgeographic.com", "ferspiddle9@nationalgeographic.com"]

var dates = ["16/10/2021", "27/07/2021", "10/06/2021", "28/06/2021", "18/03/2021", "23/05/2021", "15/05/2021", "15/12/2021", "14/03/2021", "20/10/2021", "20/10/2022"]

function App() {
  return ( 
    function list() {
      for( var i = 0; i < 5 && i < length(names); i++) {
        list[i] = <><p>{names[i]}{surnames[i]} {emails[i]} {dates[i]}<br/></p></>
      }
      return (
        list
      );},
    function deletar() {
      for( var i = 0; i < names.length; i++ ){
        if (names[i] == "id") {
          names.splice(i, 1);
          surnames.splice(i, 1);
          emails.splice(i, 1);
          dates.splice(i, 1);
        }
      }
      return (
        names, surnames, emails, splice
      );
    }
  );
}

export default App;
