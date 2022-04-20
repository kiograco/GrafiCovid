
const COUNTRIES = [
{ "gentilico" : "afegãne",
    label : "Afeganistão",
    value : "Afghanistan",
    "sigla" : "AF"
  },
  { "gentilico" : "sul-africana",
    label : "África do Sul",
    value : "South Africa",
    "sigla" : "ZA"
  },
  { "gentilico" : "albanesa",
    label : "Albânia",
    value : "Albania",
    "sigla" : "AL"
  },
  { "gentilico" : "alemã",
    label : "Alemanha",
    value : "Germany",
    "sigla" : "DE"
  },
  { "gentilico" : "andorrana",
    label : "Andorra",
    value : "Andorra",
    "sigla" : "AD"
  },
  { "gentilico" : "angolana",
    label : "Angola",
    value : "Angola",
    "sigla" : "AO"
  },
  { "gentilico" : "anguillana",
    label : "Anguilla",
    value : "Anguilla",
    "sigla" : "AI"
  },
  { "gentilico" : "de antártida",
    label : "Antártida",
    value : "Antarctica",
    "sigla" : "AQ"
  },
  { "gentilico" : "antiguana",
    label : "Antígua e Barbuda",
    value : "Antigua & Barbuda",
    "sigla" : "AG"
  },
  { "gentilico" : "saudita",
    label : "Arábia Saudita",
    value : "Saudi Arabia",
    "sigla" : "SA"
  },
  { "gentilico" : "argelina",
    label : "Argélia",
    value : "Algeria",
    "sigla" : "DZ"
  },
  { "gentilico" : "argentina",
    label : "Argentina",
    value : "Argentina",
    "sigla" : "AR"
  },
  { "gentilico" : "armênia",
    label : "Armênia",
    value : "Armenia",
    "sigla" : "AM"
  },
  { "gentilico" : "arubana",
    label : "Aruba",
    value : "Aruba",
    "sigla" : "AW"
  },
  { "gentilico" : "australiana",
    label : "Austrália",
    value : "Australia",
    "sigla" : "AU"
  },
  { "gentilico" : "austríaca",
    label : "Áustria",
    value : "Austria",
    "sigla" : "AT"
  },
  { "gentilico" : "azerbaijano",
    label : "Azerbaijão",
    value : "Azerbaijan",
    "sigla" : "AZ"
  },
  { "gentilico" : "bahamense",
    label : "Bahamas",
    value : "Bahamas",
    "sigla" : "BS"
  },
  { "gentilico" : "barenita",
    label : "Bahrein",
    value : "Bahrain",
    "sigla" : "BH"
  },
  { "gentilico" : "bengali",
    label : "Bangladesh",
    value : "Bangladesh",
    "sigla" : "BD"
  },
  { "gentilico" : "barbadiana",
    label : "Barbados",
    value : "Barbados",
    "sigla" : "BB"
  },
  { "gentilico" : "bielo-russa",
    label : "Belarus",
    value : "Belarus",
    "sigla" : "BY"
  },
  { "gentilico" : "belga",
    label : "Bélgica",
    value : "Belgium",
    "sigla" : "BE"
  },
  { "gentilico" : "belizenha",
    label : "Belize",
    value : "Belize",
    "sigla" : "BZ"
  },
  { "gentilico" : "beninense",
    label : "Benin",
    value : "Benin",
    "sigla" : "BJ"
  },
  { "gentilico" : "bermudiana",
    label : "Bermudas",
    value : "Bermuda",
    "sigla" : "BM"
  },
  { "gentilico" : "boliviana",
    label : "Bolívia",
    value : "Bolivia",
    "sigla" : "BO"
  },
  { "gentilico" : "bósnia",
    label : "Bósnia-Herzegóvina",
    value : "Bosnia & Herzegovina",
    "sigla" : "BA"
  },
  { "gentilico" : "betchuana",
    label : "Botsuana",
    value : "Botswana",
    "sigla" : "BW"
  },
  { "gentilico" : "brasileira",
    label : "Brasil",
    value : "Brazil",
    "sigla" : "BR"
  },
  { "gentilico" : "bruneiana",
    label : "Brunei",
    value : "Brunei",
    "sigla" : "BN"
  },
  { "gentilico" : "búlgara",
    label : "Bulgária",
    value : "Bulgaria",
    "sigla" : "BG"
  },
  { "gentilico" : "burquinês",
    label : "Burkina Fasso",
    value : "Burkina Faso",
    "sigla" : "BF"
  },
  { "gentilico" : "burundinesa",
    label : "Burundi",
    value : "Burundi",
    "sigla" : "BI"
  },
  { "gentilico" : "butanesa",
    label : "Butão",
    value : "Bhutan",
    "sigla" : "BT"
  },
  { "gentilico" : "cabo-verdiana",
    label : "Cabo Verde",
    value : "Cape Verde",
    "sigla" : "CV"
  },
  { "gentilico" : "camaronesa",
    label : "Camarões",
    value : "Cameroon",
    "sigla" : "CM"
  },
  { "gentilico" : "cambojana",
    label : "Camboja",
    value : "Cambodia",
    "sigla" : "KH"
  },
  { "gentilico" : "canadense",
    label : "Canadá",
    value : "Canada",
    "sigla" : "CA"
  },
  { "gentilico" : "canário",
    label : "Canárias",
    value : "Canary Islands",
    "sigla" : "IC"
  },
  { "gentilico" : "cazaque",
    label : "Cazaquistão",
    value : "Kazakhstan",
    "sigla" : "KZ"
  },
  { "gentilico" : "de ceuta e melilla",
    label : "Ceuta e Melilla",
    value : "Ceuta & Melilla",
    "sigla" : "EA"
  },
  { "gentilico" : "chadiana",
    label : "Chade",
    value : "Chad",
    "sigla" : "TD"
  },
  { "gentilico" : "chilena",
    label : "Chile",
    value : "Chile",
    "sigla" : "CL"
  },
  { "gentilico" : "chinesa",
    label : "China",
    value : "China",
    "sigla" : "CN"
  },
  { "gentilico" : "cipriota",
    label : "Chipre",
    value : "Cyprus",
    "sigla" : "CY"
  },
  { "gentilico" : "cingapuriana",
    label : "Cingapura",
    value : "Singapore",
    "sigla" : "SG"
  },
  { "gentilico" : "colombiana",
    label : "Colômbia",
    value : "Colombia",
    "sigla" : "CO"
  },
  { "gentilico" : "comorense",
    label : "Comores",
    value : "Comoros",
    "sigla" : "KM"
  },
  { "gentilico" : "congolesa",
    label : "Congo",
    value : "Congo (Republic)",
    "sigla" : "CG"
  },
  { "gentilico" : "norte-coreano",
    label : "Coréia do Norte",
    value : "North Korea",
    "sigla" : "KP"
  },
  { "gentilico" : "norte-coreana",
    label : "Coréia do Sul",
    value : "South Korea",
    "sigla" : "KR"
  },
  { "gentilico" : "marfinense",
    label : "Costa do Marfim",
    value : "Côte d¿Ivoire",
    "sigla" : "CI"
  },
  { "gentilico" : "costarriquenha",
    label : "Costa Rica",
    value : "Costa Rica",
    "sigla" : "CR"
  },
  { "gentilico" : "croata",
    label : "Croácia",
    value : "Croatia",
    "sigla" : "HR"
  },
  { "gentilico" : "cubana",
    label : "Cuba",
    value : "Cuba",
    "sigla" : "CU"
  },
  { "gentilico" : "curaçauense",
    label : "Curaçao",
    value : "Curaçao",
    "sigla" : "CW"
  },
  { "gentilico" : "chagositano",
    label : "Diego Garcia",
    value : "Diego Garcia",
    "sigla" : "DG"
  },
  { "gentilico" : "dinamarquesa",
    label : "Dinamarca",
    value : "Denmark",
    "sigla" : "DK"
  },
  { "gentilico" : "djibutiana",
    label : "Djibuti",
    value : "Djibouti",
    "sigla" : "DJ"
  },
  { "gentilico" : "dominiquense",
    label : "Dominica",
    value : "Dominica",
    "sigla" : "DM"
  },
  { "gentilico" : "egípcia",
    label : "Egito",
    value : "Egypt",
    "sigla" : "EG"
  },
  { "gentilico" : "salvadorenha",
    label : "El Salvador",
    value : "El Salvador",
    "sigla" : "SV"
  },
  { "gentilico" : "árabe",
    label : "Emirados Árabes Unidos",
    value : "United Arab Emirates",
    "sigla" : "AE"
  },
  { "gentilico" : "equatoriana",
    label : "Equador",
    value : "Ecuador",
    "sigla" : "EC"
  },
  { "gentilico" : "eritreia",
    label : "Eritréia",
    value : "Eritrea",
    "sigla" : "ER"
  },
  { "gentilico" : "eslovaco",
    label : "Eslováquia",
    value : "Slovakia",
    "sigla" : "SK"
  },
  { "gentilico" : "esloveno",
    label : "Eslovênia",
    value : "Slovenia",
    "sigla" : "SI"
  },
  { "gentilico" : "espanhola",
    label : "Espanha",
    value : "Spain",
    "sigla" : "ES"
  },
  { "gentilico" : "norte-americana",
    label : "Estados Unidos",
    value : "United States",
    "sigla" : "US"
  },
  { "gentilico" : "estoniana",
    label : "Estônia",
    value : "Estonia",
    "sigla" : "EE"
  },
  { "gentilico" : "etíope",
    label : "Etiópia",
    value : "Ethiopia",
    "sigla" : "ET"
  },
  { "gentilico" : "fijiana",
    label : "Fiji",
    value : "Fiji",
    "sigla" : "FJ"
  },
  { "gentilico" : "filipina",
    label : "Filipinas",
    value : "Philippines",
    "sigla" : "PH"
  },
  { "gentilico" : "finlandesa",
    label : "Finlândia",
    value : "Finland",
    "sigla" : "FI"
  },
  { "gentilico" : "francesa",
    label : "França",
    value : "France",
    "sigla" : "FR"
  },
  { "gentilico" : "gabonesa",
    label : "Gabão",
    value : "Gabon",
    "sigla" : "GA"
  },
  { "gentilico" : "gambiana",
    label : "Gâmbia",
    value : "Gambia",
    "sigla" : "GM"
  },
  { "gentilico" : "ganense",
    label : "Gana",
    value : "Ghana",
    "sigla" : "GH"
  },
  { "gentilico" : "georgiana",
    label : "Geórgia",
    value : "Georgia",
    "sigla" : "GE"
  },
  { "gentilico" : "gibraltariana",
    label : "Gibraltar",
    value : "Gibraltar",
    "sigla" : "GI"
  },
  { "gentilico" : "inglesa",
    label : "Grã-Bretanha (Reino Unido, UK)",
    value : "United Kingdom",
    "sigla" : "GB"
  },
  { "gentilico" : "granadina",
    label : "Granada",
    value : "Grenada",
    "sigla" : "GD"
  },
  { "gentilico" : "grega",
    label : "Grécia",
    value : "Greece",
    "sigla" : "GR"
  },
  { "gentilico" : "groenlandesa",
    label : "Groelândia",
    value : "Greenland",
    "sigla" : "GL"
  },
  { "gentilico" : "guadalupense",
    label : "Guadalupe",
    value : "Guadeloupe",
    "sigla" : "GP"
  },
  { "gentilico" : "guamês",
    label : "Guam (Território dos Estados Unidos)",
    value : "Guam",
    "sigla" : "GU"
  },
  { "gentilico" : "guatemalteca",
    label : "Guatemala",
    value : "Guatemala",
    "sigla" : "GT"
  },
  { "gentilico" : "guernesiano",
    label : "Guernsey",
    value : "Guernsey",
    "sigla" : "GG"
  },
  { "gentilico" : "guianense",
    label : "Guiana",
    value : "Guyana",
    "sigla" : "GY"
  },
  { "gentilico" : "franco-guianense",
    label : "Guiana Francesa",
    value : "French Guiana",
    "sigla" : "GF"
  },
  { "gentilico" : "guinéu-equatoriano ou equatoguineana",
    label : "Guiné",
    value : "Guinea",
    "sigla" : "GN"
  },
  { "gentilico" : "guinéu-equatoriano",
    label : "Guiné Equatorial",
    value : "Equatorial Guinea",
    "sigla" : "GQ"
  },
  { "gentilico" : "guineense",
    label : "Guiné-Bissau",
    value : "Guinea-Bissau",
    "sigla" : "GW"
  },
  { "gentilico" : "haitiana",
    label : "Haiti",
    value : "Haiti",
    "sigla" : "HT"
  },
  { "gentilico" : "holandês",
    label : "Holanda",
    value : "Netherlands",
    "sigla" : "NL"
  },
  { "gentilico" : "hondurenha",
    label : "Honduras",
    value : "Honduras",
    "sigla" : "HN"
  },
  { "gentilico" : "hong-konguiana ou chinesa",
    label : "Hong Kong",
    value : "Hong Kong",
    "sigla" : "HK"
  },
  { "gentilico" : "húngara",
    label : "Hungria",
    value : "Hungary",
    "sigla" : "HU"
  },
  { "gentilico" : "iemenita",
    label : "Iêmen",
    value : "Yemen",
    "sigla" : "YE"
  },
  { "gentilico" : "da ilha bouvet",
    label : "Ilha Bouvet",
    value : "Bouvet Island",
    "sigla" : "BV"
  },
  { "gentilico" : "da ilha de ascensão",
    label : "Ilha de Ascensão",
    value : "Ascension Island",
    "sigla" : "AC"
  },
  { "gentilico" : "da ilha de clipperton",
    label : "Ilha de Clipperton",
    value : "Clipperton Island",
    "sigla" : "CP"
  },
  { "gentilico" : "manês",
    label : "Ilha de Man",
    value : "Isle of Man",
    "sigla" : "IM"
  },
  { "gentilico" : "natalense",
    label : "Ilha Natal",
    value : "Christmas Island",
    "sigla" : "CX"
  },
  { "gentilico" : "pitcairnense",
    label : "Ilha Pitcairn",
    value : "Pitcairn Islands",
    "sigla" : "PN"
  },
  { "gentilico" : "reunionense",
    label : "Ilha Reunião",
    value : "Réunion",
    "sigla" : "RE"
  },
  { "gentilico" : "alandês",
    label : "Ilhas Aland",
    value : "Åland Islands",
    "sigla" : "AX"
  },
  { "gentilico" : "caimanês",
    label : "Ilhas Cayman",
    value : "Cayman Islands",
    "sigla" : "KY"
  },
  { "gentilico" : "coquense",
    label : "Ilhas Cocos",
    value : "Cocos (Keeling) Islands",
    "sigla" : "CC"
  },
  { "gentilico" : "cookense",
    label : "Ilhas Cook",
    value : "Cook Islands",
    "sigla" : "CK"
  },
  { "gentilico" : "faroense",
    label : "Ilhas Faroes",
    value : "Faroe Islands",
    "sigla" : "FO"
  },
  { "gentilico" : "das ilhas geórgia do sul e sandwich do sul",
    label : "Ilhas Geórgia do Sul e Sandwich do Sul",
    value : "South Georgia & South Sandwich Islands",
    "sigla" : "GS"
  },
  { "gentilico" : "das ilhas heard e mcdonald",
    label : "Ilhas Heard e McDonald (Território da Austrália)",
    value : "Heard & McDonald Islands",
    "sigla" : "HM"
  },
  { "gentilico" : "malvinense",
    label : "Ilhas Malvinas",
    value : "Falkland Islands (Islas Malvinas)",
    "sigla" : "FK"
  },
  { "gentilico" : "norte-marianense",
    label : "Ilhas Marianas do Norte",
    value : "Northern Mariana Islands",
    "sigla" : "MP"
  },
  { "gentilico" : "marshallino",
    label : "Ilhas Marshall",
    value : "Marshall Islands",
    "sigla" : "MH"
  },
  { "gentilico" : "das ilhas menores afastadas",
    label : "Ilhas Menores dos Estados Unidos",
    value : "U.S. Outlying Islands",
    "sigla" : "UM"
  },
  { "gentilico" : "norfolquino",
    label : "Ilhas Norfolk",
    value : "Norfolk Island",
    "sigla" : "NF"
  },
  { "gentilico" : "salomônico",
    label : "Ilhas Salomão",
    value : "Solomon Islands",
    "sigla" : "SB"
  },
  { "gentilico" : "seichelense",
    label : "Ilhas Seychelles",
    value : "Seychelles",
    "sigla" : "SC"
  },
  { "gentilico" : "toquelauano",
    label : "Ilhas Tokelau",
    value : "Tokelau",
    "sigla" : "TK"
  },
  { "gentilico" : "turquês",
    label : "Ilhas Turks e Caicos",
    value : "Turks & Caicos Islands",
    "sigla" : "TC"
  },
  { "gentilico" : "virginense",
    label : "Ilhas Virgens (Estados Unidos)",
    value : "U.S. Virgin Islands",
    "sigla" : "VI"
  },
  { "gentilico" : "virginense",
    label : "Ilhas Virgens (Inglaterra)",
    value : "British Virgin Islands",
    "sigla" : "VG"
  },
  { "gentilico" : "indiano",
    label : "Índia",
    value : "India",
    "sigla" : "IN"
  },
  { "gentilico" : "indonésia",
    label : "Indonésia",
    value : "Indonesia",
    "sigla" : "ID"
  },
  { "gentilico" : "iraniano",
    label : "Irã",
    value : "Iran",
    "sigla" : "IR"
  },
  { "gentilico" : "iraquiana",
    label : "Iraque",
    value : "Iraq",
    "sigla" : "IQ"
  },
  { "gentilico" : "irlandesa",
    label : "Irlanda",
    value : "Ireland",
    "sigla" : "IE"
  },
  { "gentilico" : "islandesa",
    label : "Islândia",
    value : "Iceland",
    "sigla" : "IS"
  },
  { "gentilico" : "israelense",
    label : "Israel",
    value : "Israel",
    "sigla" : "IL"
  },
  { "gentilico" : "italiana",
    label : "Itália",
    value : "Italy",
    "sigla" : "IT"
  },
  { "gentilico" : "jamaicana",
    label : "Jamaica",
    value : "Jamaica",
    "sigla" : "JM"
  },
  { "gentilico" : "japonesa",
    label : "Japão",
    value : "Japan",
    "sigla" : "JP"
  },
  { "gentilico" : "canalina",
    label : "Jersey",
    value : "Jersey",
    "sigla" : "JE"
  },
  { "gentilico" : "jordaniana",
    label : "Jordânia",
    value : "Jordan",
    "sigla" : "JO"
  },
  { "gentilico" : "kiribatiana",
    label : "Kiribati",
    value : "Kiribati",
    "sigla" : "KI"
  },
  { "gentilico" : "kosovar",
    label : "Kosovo",
    value : "Kosovo",
    "sigla" : "XK"
  },
  { "gentilico" : "kuwaitiano",
    label : "Kuait",
    value : "Kuwait",
    "sigla" : "KW"
  },
  { "gentilico" : "laosiana",
    label : "Laos",
    value : "Laos",
    "sigla" : "LA"
  },
  { "gentilico" : "lesota",
    label : "Lesoto",
    value : "Lesotho",
    "sigla" : "LS"
  },
  { "gentilico" : "letão",
    label : "Letônia",
    value : "Latvia",
    "sigla" : "LV"
  },
  { "gentilico" : "libanesa",
    label : "Líbano",
    value : "Lebanon",
    "sigla" : "LB"
  },
  { "gentilico" : "liberiana",
    label : "Libéria",
    value : "Liberia",
    "sigla" : "LR"
  },
  { "gentilico" : "líbia",
    label : "Líbia",
    value : "Libya",
    "sigla" : "LY"
  },
  { "gentilico" : "liechtensteiniense",
    label : "Liechtenstein",
    value : "Liechtenstein",
    "sigla" : "LI"
  },
  { "gentilico" : "lituana",
    label : "Lituânia",
    value : "Lithuania",
    "sigla" : "LT"
  },
  { "gentilico" : "luxemburguesa",
    label : "Luxemburgo",
    value : "Luxembourg",
    "sigla" : "LU"
  },
  { "gentilico" : "macauense",
    label : "Macau",
    value : "Macau",
    "sigla" : "MO"
  },
  { "gentilico" : "macedônio",
    label : "Macedônia (República Yugoslava)",
    value : "Macedonia (FYROM)",
    "sigla" : "MK"
  },
  { "gentilico" : "malgaxe",
    label : "Madagascar",
    value : "Madagascar",
    "sigla" : "MG"
  },
  { "gentilico" : "malaia",
    label : "Malásia",
    value : "Malaysia",
    "sigla" : "MY"
  },
  { "gentilico" : "malauiano",
    label : "Malaui",
    value : "Malawi",
    "sigla" : "MW"
  },
  { "gentilico" : "maldívia",
    label : "Maldivas",
    value : "Maldives",
    "sigla" : "MV"
  },
  { "gentilico" : "malinesa",
    label : "Mali",
    value : "Mali",
    "sigla" : "ML"
  },
  { "gentilico" : "maltesa",
    label : "Malta",
    value : "Malta",
    "sigla" : "MT"
  },
  { "gentilico" : "marroquina",
    label : "Marrocos",
    value : "Morocco",
    "sigla" : "MA"
  },
  { "gentilico" : "martiniquense",
    label : "Martinica",
    value : "Martinique",
    "sigla" : "MQ"
  },
  { "gentilico" : "mauriciana",
    label : "Maurício",
    value : "Mauritius",
    "sigla" : "MU"
  },
  { "gentilico" : "mauritana",
    label : "Mauritânia",
    value : "Mauritania",
    "sigla" : "MR"
  },
  { "gentilico" : "maiotense",
    label : "Mayotte",
    value : "Mayotte",
    "sigla" : "YT"
  },
  { "gentilico" : "mexicana",
    label : "México",
    value : "Mexico",
    "sigla" : "MX"
  },
  { "gentilico" : "micronésia",
    label : "Micronésia",
    value : "Micronesia",
    "sigla" : "FM"
  },
  { "gentilico" : "moçambicana",
    label : "Moçambique",
    value : "Mozambique",
    "sigla" : "MZ"
  },
  { "gentilico" : "moldavo",
    label : "Moldova",
    value : "Moldova",
    "sigla" : "MD"
  },
  { "gentilico" : "monegasca",
    label : "Mônaco",
    value : "Monaco",
    "sigla" : "MC"
  },
  { "gentilico" : "mongol",
    label : "Mongólia",
    value : "Mongolia",
    "sigla" : "MN"
  },
  { "gentilico" : "montenegra",
    label : "Montenegro",
    value : "Montenegro",
    "sigla" : "ME"
  },
  { "gentilico" : "montserratiano",
    label : "Montserrat",
    value : "Montserrat",
    "sigla" : "MS"
  },
  { "gentilico" : "birmanês",
    label : "Myanma",
    value : "Myanmar (Burma)",
    "sigla" : "MM"
  },
  { "gentilico" : "namíbia",
    label : "Namíbia",
    value : "Namibia",
    "sigla" : "NA"
  },
  { "gentilico" : "nauruana",
    label : "Nauru",
    value : "Nauru",
    "sigla" : "NR"
  },
  { "gentilico" : "nepalesa",
    label : "Nepal",
    value : "Nepal",
    "sigla" : "NP"
  },
  { "gentilico" : "nicaraguense",
    label : "Nicarágua",
    value : "Nicaragua",
    "sigla" : "NI"
  },
  { "gentilico" : "nigerina",
    label : "Níger",
    value : "Niger",
    "sigla" : "NE"
  },
  { "gentilico" : "nigeriana",
    label : "Nigéria",
    value : "Nigeria",
    "sigla" : "NG"
  },
  { "gentilico" : "niueana",
    label : "Niue",
    value : "Niue",
    "sigla" : "NU"
  },
  { "gentilico" : "norueguesa",
    label : "Noruega",
    value : "Norway",
    "sigla" : "NO"
  },
  { "gentilico" : "caledônia",
    label : "Nova Caledônia",
    value : "New Caledonia",
    "sigla" : "NC"
  },
  { "gentilico" : "neozelandesa",
    label : "Nova Zelândia",
    value : "New Zealand",
    "sigla" : "NZ"
  },
  { "gentilico" : "omani",
    label : "Omã",
    value : "Oman",
    "sigla" : "OM"
  },
  { "gentilico" : "dos países baixos caribenhos",
    label : "Países Baixos Caribenhos",
    value : "Caribbean Netherlands",
    "sigla" : "BQ"
  },
  { "gentilico" : "palauense",
    label : "Palau",
    value : "Palau",
    "sigla" : "PW"
  },
  { "gentilico" : "palestino",
    label : "Palestina",
    value : "Palestine",
    "sigla" : "PS"
  },
  { "gentilico" : "zona do canal do panamá",
    label : "Panamá",
    value : "Panama",
    "sigla" : "PA"
  },
  { "gentilico" : "pauásia",
    label : "Papua-Nova Guiné",
    value : "Papua New Guinea",
    "sigla" : "PG"
  },
  { "gentilico" : "paquistanesa",
    label : "Paquistão",
    value : "Pakistan",
    "sigla" : "PK"
  },
  { "gentilico" : "paraguaia",
    label : "Paraguai",
    value : "Paraguay",
    "sigla" : "PY"
  },
  { "gentilico" : "peruana",
    label : "Peru",
    value : "Peru",
    "sigla" : "PE"
  },
  { "gentilico" : "franco-polinésia",
    label : "Polinésia Francesa",
    value : "French Polynesia",
    "sigla" : "PF"
  },
  { "gentilico" : "polonesa",
    label : "Polônia",
    value : "Poland",
    "sigla" : "PL"
  },
  { "gentilico" : "portorriquenha",
    label : "Porto Rico",
    value : "Puerto Rico",
    "sigla" : "PR"
  },
  { "gentilico" : "portuguesa",
    label : "Portugal",
    value : "Portugal",
    "sigla" : "PT"
  },
  { "gentilico" : "catarense",
    label : "Qatar",
    value : "Qatar",
    "sigla" : "QA"
  },
  { "gentilico" : "queniano",
    label : "Quênia",
    value : "Kenya",
    "sigla" : "KE"
  },
  { "gentilico" : "quirguiz",
    label : "Quirguistão",
    value : "Kyrgyzstan",
    "sigla" : "KG"
  },
  { "gentilico" : "centro-africana",
    label : "República Centro-Africana",
    value : "Central African Republic",
    "sigla" : "CF"
  },
  { "gentilico" : "congolesa",
    label : "República Democrática do Congo",
    value : "Congo (DRC)",
    "sigla" : "CD"
  },
  { "gentilico" : "dominicana",
    label : "República Dominicana",
    value : "Dominican Republic",
    "sigla" : "DO"
  },
  { "gentilico" : "tcheco",
    label : "República Tcheca",
    value : "Czech Republic",
    "sigla" : "CZ"
  },
  { "gentilico" : "romena",
    label : "Romênia",
    value : "Romania",
    "sigla" : "RO"
  },
  { "gentilico" : "ruandesa",
    label : "Ruanda",
    value : "Rwanda",
    "sigla" : "RW"
  },
  { "gentilico" : "russa",
    label : "Rússia (antiga URSS) - Federação Russa",
    value : "Russia",
    "sigla" : "RU"
  },
  { "gentilico" : "saariano",
    label : "Saara Ocidental",
    value : "Western Sahara",
    "sigla" : "EH"
  },
  { "gentilico" : "pedro-miquelonense",
    label : "Saint-Pierre e Miquelon",
    value : "St. Pierre & Miquelon",
    "sigla" : "PM"
  },
  { "gentilico" : "samoana",
    label : "Samoa Americana",
    value : "American Samoa",
    "sigla" : "AS"
  },
  { "gentilico" : "samoano",
    label : "Samoa Ocidental",
    value : "Samoa",
    "sigla" : "WS"
  },
  { "gentilico" : "samarinês",
    label : "San Marino",
    value : "San Marino",
    "sigla" : "SM"
  },
  { "gentilico" : "helenense",
    label : "Santa Helena",
    value : "St. Helena",
    "sigla" : "SH"
  },
  { "gentilico" : "santa-lucense",
    label : "Santa Lúcia",
    value : "St. Lucia",
    "sigla" : "LC"
  },
  { "gentilico" : "são-bartolomeense",
    label : "São Bartolomeu",
    value : "St. Barthélemy",
    "sigla" : "BL"
  },
  { "gentilico" : "são-cristovense",
    label : "São Cristóvão e Névis",
    value : "St. Kitts & Nevis",
    "sigla" : "KN"
  },
  { "gentilico" : "são-martinhense",
    label : "São Martim",
    value : "St. Martin",
    "sigla" : "MF"
  },
  { "gentilico" : "são-martinhense",
    label : "São Martinho",
    value : "Sint Maarten",
    "sigla" : "SX"
  },
  { "gentilico" : "são-tomense",
    label : "São Tomé e Príncipe",
    value : "São Tomé & Príncipe",
    "sigla" : "ST"
  },
  { "gentilico" : "sao-vicentino",
    label : "São Vicente e Granadinas",
    value : "St. Vincent & Grenadines",
    "sigla" : "VC"
  },
  { "gentilico" : "senegalesa",
    label : "Senegal",
    value : "Senegal",
    "sigla" : "SN"
  },
  { "gentilico" : "leonesa",
    label : "Serra Leoa",
    value : "Sierra Leone",
    "sigla" : "SL"
  },
  { "gentilico" : "sérvia",
    label : "Sérvia",
    value : "Serbia",
    "sigla" : "RS"
  },
  { "gentilico" : "síria",
    label : "Síria",
    value : "Syria",
    "sigla" : "SY"
  },
  { "gentilico" : "somali",
    label : "Somália",
    value : "Somalia",
    "sigla" : "SO"
  },
  { "gentilico" : "cingalesa",
    label : "Sri Lanka",
    value : "Sri Lanka",
    "sigla" : "LK"
  },
  { "gentilico" : "suazi",
    label : "Suazilândia",
    value : "Swaziland",
    "sigla" : "SZ"
  },
  { "gentilico" : "sudanesa",
    label : "Sudão",
    value : "Sudan",
    "sigla" : "SD"
  },
  { "gentilico" : "sul-sudanês",
    label : "Sudão do Sul",
    value : "South Sudan",
    "sigla" : "SS"
  },
  { "gentilico" : "sueca",
    label : "Suécia",
    value : "Sweden",
    "sigla" : "SE"
  },
  { "gentilico" : "suíça",
    label : "Suíça",
    value : "Switzerland",
    "sigla" : "CH"
  },
  { "gentilico" : "surinamesa",
    label : "Suriname",
    value : "Suriname",
    "sigla" : "SR"
  },
  { "gentilico" : "svalbardense",
    label : "Svalbard",
    value : "Svalbard & Jan Mayen",
    "sigla" : "SJ"
  },
  { "gentilico" : "tadjique",
    label : "Tadjiquistão",
    value : "Tajikistan",
    "sigla" : "TJ"
  },
  { "gentilico" : "tailandesa",
    label : "Tailândia",
    value : "Thailand",
    "sigla" : "TH"
  },
  { "gentilico" : "taiwanês",
    label : "Taiwan",
    value : "Taiwan",
    "sigla" : "TW"
  },
  { "gentilico" : "tanzaniana",
    label : "Tanzânia",
    value : "Tanzania",
    "sigla" : "TZ"
  },
  { "gentilico" : "do território britânico do oceano índico",
    label : "Território Britânico do Oceano índico",
    value : "British Indian Ocean Territory",
    "sigla" : "IO"
  },
  { "gentilico" : "do territórios do sul da frança",
    label : "Territórios do Sul da França",
    value : "French Southern Territories",
    "sigla" : "TF"
  },
  { "gentilico" : "timorense",
    label : "Timor-Leste",
    value : "Timor-Leste",
    "sigla" : "TL"
  },
  { "gentilico" : "togolesa",
    label : "Togo",
    value : "Togo",
    "sigla" : "TG"
  },
  { "gentilico" : "tonganesa",
    label : "Tonga",
    value : "Tonga",
    "sigla" : "TO"
  },
  { "gentilico" : "trinitário-tobagense",
    label : "Trinidad e Tobago",
    value : "Trinidad & Tobago",
    "sigla" : "TT"
  },
  { "gentilico" : "tristanita",
    label : "Tristão da Cunha",
    value : "Tristan da Cunha",
    "sigla" : "TA"
  },
  { "gentilico" : "tunisiana",
    label : "Tunísia",
    value : "Tunisia",
    "sigla" : "TN"
  },
  { "gentilico" : "turcomana",
    label : "Turcomenistão",
    value : "Turkmenistan",
    "sigla" : "TM"
  },
  { "gentilico" : "turca",
    label : "Turquia",
    value : "Turkey",
    "sigla" : "TR"
  },
  { "gentilico" : "tuvaluana",
    label : "Tuvalu",
    value : "Tuvalu",
    "sigla" : "TV"
  },
  { "gentilico" : "ucraniana",
    label : "Ucrânia",
    value : "Ukraine",
    "sigla" : "UA"
  },
  { "gentilico" : "ugandense",
    label : "Uganda",
    value : "Uganda",
    "sigla" : "UG"
  },
  { "gentilico" : "uruguaia",
    label : "Uruguai",
    value : "Uruguay",
    "sigla" : "UY"
  },
  { "gentilico" : "uzbeque",
    label : "Uzbequistão",
    value : "Uzbekistan",
    "sigla" : "UZ"
  },
  { "gentilico" : "vanuatuense",
    label : "Vanuatu",
    value : "Vanuatu",
    "sigla" : "VU"
  },
  { "gentilico" : "vaticano",
    label : "Vaticano",
    value : "Vatican City",
    "sigla" : "VA"
  },
  { "gentilico" : "venezuelana",
    label : "Venezuela",
    value : "Venezuela",
    "sigla" : "VE"
  },
  { "gentilico" : "vietnamita",
    label : "Vietnã",
    value : "Vietnam",
    "sigla" : "VN"
  },
  { "gentilico" : "wallis-futunense",
    label : "Wallis e Futuna",
    value : "Wallis & Futuna",
    "sigla" : "WF"
  },
  { "gentilico" : "zambiana",
    label : "Zâmbia",
    value : "Zambia",
    "sigla" : "ZM"
  },
  { "gentilico" : "zimbabuana",
    label : "Zimbábue",
    value : "Zimbabwe",
    "sigla" : "ZW"
  }
]
export default COUNTRIES