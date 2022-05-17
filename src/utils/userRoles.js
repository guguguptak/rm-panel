
export const roleToAccessLevel = {
  "ROLE_USER": 0, // shouldn't be used directly
  "ROLE_NOBODY": 0,
  "ROLE_JOURNAL_KEEPER": 1,
  "ROLE_UNIT_COORD": 2,
  "ROLE_UNIT_PRINCIPAL": 3,
  "ROLE_CITY_COORD": 4,
  "ROLE_CAMPAIGN_COORD": 5,
  "ROLE_ADMIN": 6,
  "ROLE_MISC": 7, // meta-role
}

export const accessLevelToRole = [
  "ROLE_NOBODY",
  "ROLE_JOURNAL_KEEPER",
  "ROLE_UNIT_COORD",
  "ROLE_UNIT_PRINCIPAL",
  "ROLE_CITY_COORD",
  "ROLE_CAMPAIGN_COORD",
  "ROLE_ADMIN",
  "ROLE_MISC", // meta-role
];
