export const errorToFriendlyNameMap = {
    "VAX_ERROR_FORBIDDEN":
      "Brak wystarczających uprawnień.",
    "VAX_ERROR_CONFLICTING_ENTRY_FOUND":
      "Plik o podanej nazwie już istnieje w bazie (być może u innego użytkownika). " +
        "Spróbuj dodać plik pod inną nazwą.",
    "VAX_ERROR_NOT_YET_IMPLEMENTED":
      "Wybrana funkcjonalność nie została jeszcze zaimplementowana w systemie.",
//    "VAX_ERROR_ARGUMENT_COUNT_MISMATCH":
//      "Niezgodna ilość argumentów do funkcji; sprawdź, czy ilość wszystkich parametrów jest równa.",
    "VAX_ERROR_INVITE_ARGUMENT_COUNT_MISMATCH":
      "Liczba nazw adresatów powinna być równa liczbie adresów email",
    "VAX_ERROR_DUPLICATE_EMAIL":
      "Lista adresów email zawiera duplikaty",
    "VAX_ERROR_NEW_PASSWORDS_DONT_MATCH":
      "Weryfikacja haseł nie powiodła się; hasła się nie zgadzają.",
    "VAX_ERROR_NEW_AND_OLD_PASSWORDS_ARE_THE_SAME":
      "Weryfikacja haseł nie powiodła się; nowe hasło takie samo jak stare.",
    "VAX_ERROR_OLD_PASSWORD_INVALID":
      "Weryfikacja hasła nie powiodła się; stare hasło nie jest poprawne.",
    "VAX_ERROR_USERNAME_ALREADY_EXISTS":
      "Użytkownik o podanej nazwie/adresie email już istnieje.",
    "VAX_ERROR_COORD_FORM_VALUES_INVALID":
      "Nieprawidłowe wartości w formularzu danych nowego koordynatora.",
    "VAX_ERROR_CAMPAIGN_ALREADY_EXISTS":
      "Kampania o podanej nazwie już istnieje.",
    "VAX_ERROR_EMAIL_TOO_LONG":
      "Co najmniej jeden z podanych adresów email jest zbyt długi.",
    "VAX_ERROR_NAME_TOO_LONG":
      "Co najmniej jedne z podanych personaliów są zbyt długie.",
}

export function errorToFriendlyName ( error ) {
  return errorToFriendlyNameMap[error] ?? error.replace( /VAX_ERROR_/, "Error: " ).replace( /_/g, " " );
}

export const successMsg = "Operacja wykonana pomyślnie.";

export const noFileSelectedMsg = "- nie wybrano pliku -";

export const ageOptionsStr = [ // note the actual indexes are shifted by one here:
  "", // -1
  "przedszk.", // 0
  "klasy 0-3", // 1 // #408
  "klasy 4-8", // 2 // #408
  "liceum", ///// 3 // disabled in select, as per #408
  "dorośli", //// 4
];

export const unitTypesStr = [
  "przedszkole",
  "szkoła podstawowa",
]

export const unitTypesPluralStr = [
  "przedszkola",
  "szkoły podstawowe",
];

export const unitSubtypesStr = [
  "publiczna",
  "niepubliczna",
]

/*
export const contextMissingStr = "Niekompletny kontekst dla widoku - sprawdź, czy prawidłowo wybrana została"
  + " kampania/miasto/placówka/oddział dla danej operacji";
*/
export const contextMissingStr = "Wybierz z menu górnego kampanię/miasto/placówkę/klasę wymagane dla bieżącego widoku.";

export const t12nStr = [
  "brak",
  "rower",
  "hulajnoga",
  "rolki",
  "pieszo",
  "samochód",
  "komunikacja publiczna",
  "dojazd łączony"
];

export const userRolesStr = [
  "nikt",
  "nauczyciel",
  "Koordynator Szkolny",
  "dyrektor placówki",
  "Koordynator Miejski",
  "Koordynator Krajowy",
  "administrator",
  "- inny -",
];

export const printMaterialTypesStr = [
  "plakat szkolny",
  "torba na nagrody",
  "plakat klasowy",
  "naklejki",
  "książeczka",
  "broszura",
];

export const everyoneStr = "- każdy -";
export const everythingForAccessLevelStr = [
  "- nic -",
  "- wszystkie klasy -",
  null /* "- wszystkie klasy -" */,
  null /* "- wszystkie klasy -" */,
  null /* "- wszystkie szkoły -" */,
  "- wszystko -",
  "- wszystko -",
];

export const mailerTypesStr = [
  "z serwera",
  "z prywatnego konta",
];

export const levelNamesByUnitTypeStr = [
  [
    [
      "trzylatki",
      "czterolatki",
      "pięciolatki",
      "sześciolatki",
    ],
    [
      "pracownicy",
    ],
  ],
  [
    [
      "zerówka",
      "I klasa",
      "II klasa",
      "III klasa",
      "IV klasa",
      "V klasa",
      "VI klasa",
      "VII klasa",
      "VIII klasa",
    ],
    [
      "pracownicy",
    ],
  ]
];

export const campaignStagesStr = [
  "przygotowania",
  "aktywna",
  "zakończona",
];

export const tooManyDatesStr = "Za dużo zaznaczonych dat! Tylko trzy pierwsze zostaną uznane.";

export const noFilesSelectedStr = "Nie wybrano żadnego pliku!";

export const forbiddenAlert = "Brak wystarczających uprawnień; przeładować stronę?";

export const atLeastOneRequiredStr = "Zaznacz przynajmniej jedną opcję.";

export const processFinishedCampaignStr = "UWAGA: Operacja transformacji kampanii na agregat jest nieodwracalna."
 + " Czy na pewno?";
