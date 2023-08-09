const countries_data = [
	{
			"name": "Afghanistan",
			"capital": "Kabul",
			"languages": [
					"Pashto",
					"Uzbek",
					"Turkmen"
			],
			"population": 40218234,
			"flag": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
			"region": "Asia",
			"area": 652230
	},
	{
			"name": "Åland Islands",
			"capital": "Mariehamn",
			"languages": [
					"Swedish"
			],
			"population": 28875,
			"flag": "https://flagcdn.com/ax.svg",
			"region": "Europe",
			"area": 1580
	},
	{
			"name": "Albania",
			"capital": "Tirana",
			"languages": [
					"Albanian"
			],
			"population": 2837743,
			"flag": "https://flagcdn.com/al.svg",
			"region": "Europe",
			"area": 28748
	},
	{
			"name": "Algeria",
			"capital": "Algiers",
			"languages": [
					"Arabic"
			],
			"population": 43851043,
			"flag": "https://flagcdn.com/dz.svg",
			"region": "Africa",
			"area": 2381741
	},
	{
			"name": "American Samoa",
			"capital": "Pago Pago",
			"languages": [
					"English",
					"Samoan"
			],
			"population": 55197,
			"flag": "https://flagcdn.com/as.svg",
			"region": "Oceania",
			"area": 199
	},
	{
			"name": "Andorra",
			"capital": "Andorra la Vella",
			"languages": [
					"Catalan"
			],
			"population": 77265,
			"flag": "https://flagcdn.com/ad.svg",
			"region": "Europe",
			"area": 468
	},
	{
			"name": "Angola",
			"capital": "Luanda",
			"languages": [
					"Portuguese"
			],
			"population": 32866268,
			"flag": "https://flagcdn.com/ao.svg",
			"region": "Africa",
			"area": 1246700
	},
	{
			"name": "Anguilla",
			"capital": "The Valley",
			"languages": [
					"English"
			],
			"population": 13452,
			"flag": "https://flagcdn.com/ai.svg",
			"region": "Americas",
			"area": 91
	},
	{
			"name": "Antarctica",
			"languages": [
					"English",
					"Russian"
			],
			"population": 1000,
			"flag": "https://flagcdn.com/aq.svg",
			"region": "Polar",
			"area": 14000000
	},
	{
			"name": "Antigua and Barbuda",
			"capital": "Saint John's",
			"languages": [
					"English"
			],
			"population": 97928,
			"flag": "https://flagcdn.com/ag.svg",
			"region": "Americas",
			"area": 442
	},
	{
			"name": "Argentina",
			"capital": "Buenos Aires",
			"languages": [
					"Spanish",
					"Guaraní"
			],
			"population": 45376763,
			"flag": "https://flagcdn.com/ar.svg",
			"region": "Americas",
			"area": 2780400
	},
	{
			"name": "Armenia",
			"capital": "Yerevan",
			"languages": [
					"Armenian"
			],
			"population": 2963234,
			"flag": "https://flagcdn.com/am.svg",
			"region": "Asia",
			"area": 29743
	},
	{
			"name": "Aruba",
			"capital": "Oranjestad",
			"languages": [
					"Dutch",
					"(Eastern) Punjabi"
			],
			"population": 106766,
			"flag": "https://flagcdn.com/aw.svg",
			"region": "Americas",
			"area": 180
	},
	{
			"name": "Australia",
			"capital": "Canberra",
			"languages": [
					"English"
			],
			"population": 25687041,
			"flag": "https://flagcdn.com/au.svg",
			"region": "Oceania",
			"area": 7692024
	},
	{
			"name": "Austria",
			"capital": "Vienna",
			"languages": [
					"German"
			],
			"population": 8917205,
			"flag": "https://flagcdn.com/at.svg",
			"region": "Europe",
			"area": 83871
	},
	{
			"name": "Azerbaijan",
			"capital": "Baku",
			"languages": [
					"Azerbaijani"
			],
			"population": 10110116,
			"flag": "https://flagcdn.com/az.svg",
			"region": "Asia",
			"area": 86600
	},
	{
			"name": "Bahamas",
			"capital": "Nassau",
			"languages": [
					"English"
			],
			"population": 393248,
			"flag": "https://flagcdn.com/bs.svg",
			"region": "Americas",
			"area": 13943
	},
	{
			"name": "Bahrain",
			"capital": "Manama",
			"languages": [
					"Arabic"
			],
			"population": 1701583,
			"flag": "https://flagcdn.com/bh.svg",
			"region": "Asia",
			"area": 765
	},
	{
			"name": "Bangladesh",
			"capital": "Dhaka",
			"languages": [
					"Bengali"
			],
			"population": 164689383,
			"flag": "https://flagcdn.com/bd.svg",
			"region": "Asia",
			"area": 147570
	},
	{
			"name": "Barbados",
			"capital": "Bridgetown",
			"languages": [
					"English"
			],
			"population": 287371,
			"flag": "https://flagcdn.com/bb.svg",
			"region": "Americas",
			"area": 430
	},
	{
			"name": "Belarus",
			"capital": "Minsk",
			"languages": [
					"Belarusian",
					"Russian"
			],
			"population": 9398861,
			"flag": "https://flagcdn.com/by.svg",
			"region": "Europe",
			"area": 207600
	},
	{
			"name": "Belgium",
			"capital": "Brussels",
			"languages": [
					"Dutch",
					"French",
					"German"
			],
			"population": 11555997,
			"flag": "https://flagcdn.com/be.svg",
			"region": "Europe",
			"area": 30528
	},
	{
			"name": "Belize",
			"capital": "Belmopan",
			"languages": [
					"English",
					"Spanish"
			],
			"population": 397621,
			"flag": "https://flagcdn.com/bz.svg",
			"region": "Americas",
			"area": 22966
	},
	{
			"name": "Benin",
			"capital": "Porto-Novo",
			"languages": [
					"French"
			],
			"population": 12123198,
			"flag": "https://flagcdn.com/bj.svg",
			"region": "Africa",
			"area": 112622
	},
	{
			"name": "Bermuda",
			"capital": "Hamilton",
			"languages": [
					"English"
			],
			"population": 63903,
			"flag": "https://flagcdn.com/bm.svg",
			"region": "Americas",
			"area": 54
	},
	{
			"name": "Bhutan",
			"capital": "Thimphu",
			"languages": [
					"Dzongkha"
			],
			"population": 771612,
			"flag": "https://flagcdn.com/bt.svg",
			"region": "Asia",
			"area": 38394
	},
	{
			"name": "Bolivia (Plurinational State of)",
			"capital": "Sucre",
			"languages": [
					"Spanish",
					"Aymara",
					"Quechua"
			],
			"population": 11673029,
			"flag": "https://flagcdn.com/bo.svg",
			"region": "Americas",
			"area": 1098581
	},
	{
			"name": "Bonaire, Sint Eustatius and Saba",
			"capital": "Kralendijk",
			"languages": [
					"Dutch"
			],
			"population": 17408,
			"flag": "https://flagcdn.com/bq.svg",
			"region": "Americas",
			"area": 294
	},
	{
			"name": "Bosnia and Herzegovina",
			"capital": "Sarajevo",
			"languages": [
					"Bosnian",
					"Croatian",
					"Serbian"
			],
			"population": 3280815,
			"flag": "https://flagcdn.com/ba.svg",
			"region": "Europe",
			"area": 51209
	},
	{
			"name": "Botswana",
			"capital": "Gaborone",
			"languages": [
					"English",
					"Tswana"
			],
			"population": 2351625,
			"flag": "https://flagcdn.com/bw.svg",
			"region": "Africa",
			"area": 582000
	},
	{
			"name": "Bouvet Island",
			"languages": [
					"Norwegian",
					"Norwegian Bokmål",
					"Norwegian Nynorsk"
			],
			"population": 0,
			"flag": "https://flagcdn.com/bv.svg",
			"region": "Antarctic Ocean",
			"area": 49
	},
	{
			"name": "Brazil",
			"capital": "Brasília",
			"languages": [
					"Portuguese"
			],
			"population": 212559409,
			"flag": "https://flagcdn.com/br.svg",
			"region": "Americas",
			"area": 8515767
	},
	{
			"name": "British Indian Ocean Territory",
			"capital": "Diego Garcia",
			"languages": [
					"English"
			],
			"population": 3000,
			"flag": "https://flagcdn.com/io.svg",
			"region": "Africa",
			"area": 60
	},
	{
			"name": "United States Minor Outlying Islands",
			"languages": [
					"English"
			],
			"population": 300,
			"flag": "https://flagcdn.com/um.svg",
			"region": "Americas"
	},
	{
			"name": "Virgin Islands (British)",
			"capital": "Road Town",
			"languages": [
					"English"
			],
			"population": 30237,
			"flag": "https://flagcdn.com/vg.svg",
			"region": "Americas",
			"area": 151
	},
	{
			"name": "Virgin Islands (U.S.)",
			"capital": "Charlotte Amalie",
			"languages": [
					"English"
			],
			"population": 106290,
			"flag": "https://flagcdn.com/vi.svg",
			"region": "Americas",
			"area": 346.36
	},
	{
			"name": "Brunei Darussalam",
			"capital": "Bandar Seri Begawan",
			"languages": [
					"Malay"
			],
			"population": 437483,
			"flag": "https://flagcdn.com/bn.svg",
			"region": "Asia",
			"area": 5765
	},
	{
			"name": "Bulgaria",
			"capital": "Sofia",
			"languages": [
					"Bulgarian"
			],
			"population": 6927288,
			"flag": "https://flagcdn.com/bg.svg",
			"region": "Europe",
			"area": 110879
	},
	{
			"name": "Burkina Faso",
			"capital": "Ouagadougou",
			"languages": [
					"French",
					"Fula"
			],
			"population": 20903278,
			"flag": "https://flagcdn.com/bf.svg",
			"region": "Africa",
			"area": 272967
	},
	{
			"name": "Burundi",
			"capital": "Gitega",
			"languages": [
					"French",
					"Kirundi"
			],
			"population": 11890781,
			"flag": "https://flagcdn.com/bi.svg",
			"region": "Africa",
			"area": 27834
	},
	{
			"name": "Cambodia",
			"capital": "Phnom Penh",
			"languages": [
					"Khmer"
			],
			"population": 16718971,
			"flag": "https://flagcdn.com/kh.svg",
			"region": "Asia",
			"area": 181035
	},
	{
			"name": "Cameroon",
			"capital": "Yaoundé",
			"languages": [
					"English",
					"French"
			],
			"population": 26545864,
			"flag": "https://flagcdn.com/cm.svg",
			"region": "Africa",
			"area": 475442
	},
	{
			"name": "Canada",
			"capital": "Ottawa",
			"languages": [
					"English",
					"French"
			],
			"population": 38005238,
			"flag": "https://flagcdn.com/ca.svg",
			"region": "Americas",
			"area": 9984670
	},
	{
			"name": "Cabo Verde",
			"capital": "Praia",
			"languages": [
					"Portuguese"
			],
			"population": 555988,
			"flag": "https://flagcdn.com/cv.svg",
			"region": "Africa",
			"area": 4033
	},
	{
			"name": "Cayman Islands",
			"capital": "George Town",
			"languages": [
					"English"
			],
			"population": 65720,
			"flag": "https://flagcdn.com/ky.svg",
			"region": "Americas",
			"area": 264
	},
	{
			"name": "Central African Republic",
			"capital": "Bangui",
			"languages": [
					"French",
					"Sango"
			],
			"population": 4829764,
			"flag": "https://flagcdn.com/cf.svg",
			"region": "Africa",
			"area": 622984
	},
	{
			"name": "Chad",
			"capital": "N'Djamena",
			"languages": [
					"French",
					"Arabic"
			],
			"population": 16425859,
			"flag": "https://flagcdn.com/td.svg",
			"region": "Africa",
			"area": 1284000
	},
	{
			"name": "Chile",
			"capital": "Santiago",
			"languages": [
					"Spanish"
			],
			"population": 19116209,
			"flag": "https://flagcdn.com/cl.svg",
			"region": "Americas",
			"area": 756102
	},
	{
			"name": "China",
			"capital": "Beijing",
			"languages": [
					"Chinese"
			],
			"population": 1402112000,
			"flag": "https://flagcdn.com/cn.svg",
			"region": "Asia",
			"area": 9640011
	},
	{
			"name": "Christmas Island",
			"capital": "Flying Fish Cove",
			"languages": [
					"English"
			],
			"population": 2072,
			"flag": "https://flagcdn.com/cx.svg",
			"region": "Oceania",
			"area": 135
	},
	{
			"name": "Cocos (Keeling) Islands",
			"capital": "West Island",
			"languages": [
					"English"
			],
			"population": 550,
			"flag": "https://flagcdn.com/cc.svg",
			"region": "Oceania",
			"area": 14
	},
	{
			"name": "Colombia",
			"capital": "Bogotá",
			"languages": [
					"Spanish"
			],
			"population": 50882884,
			"flag": "https://flagcdn.com/co.svg",
			"region": "Americas",
			"area": 1141748
	},
	{
			"name": "Comoros",
			"capital": "Moroni",
			"languages": [
					"Arabic",
					"French"
			],
			"population": 869595,
			"flag": "https://flagcdn.com/km.svg",
			"region": "Africa",
			"area": 1862
	},
	{
			"name": "Congo",
			"capital": "Brazzaville",
			"languages": [
					"French",
					"Lingala"
			],
			"population": 5518092,
			"flag": "https://flagcdn.com/cg.svg",
			"region": "Africa",
			"area": 342000
	},
	{
			"name": "Congo (Democratic Republic of the)",
			"capital": "Kinshasa",
			"languages": [
					"French",
					"Lingala",
					"Kongo",
					"Swahili",
					"Luba-Katanga"
			],
			"population": 89561404,
			"flag": "https://flagcdn.com/cd.svg",
			"region": "Africa",
			"area": 2344858
	},
	{
			"name": "Cook Islands",
			"capital": "Avarua",
			"languages": [
					"English",
					"Cook Islands Māori"
			],
			"population": 18100,
			"flag": "https://flagcdn.com/ck.svg",
			"region": "Oceania",
			"area": 236
	},
	{
			"name": "Costa Rica",
			"capital": "San José",
			"languages": [
					"Spanish"
			],
			"population": 5094114,
			"flag": "https://flagcdn.com/cr.svg",
			"region": "Americas",
			"area": 51100
	},
	{
			"name": "Croatia",
			"capital": "Zagreb",
			"languages": [
					"Croatian"
			],
			"population": 4047200,
			"flag": "https://flagcdn.com/hr.svg",
			"region": "Europe",
			"area": 56594
	},
	{
			"name": "Cuba",
			"capital": "Havana",
			"languages": [
					"Spanish"
			],
			"population": 11326616,
			"flag": "https://flagcdn.com/cu.svg",
			"region": "Americas",
			"area": 109884
	},
	{
			"name": "Curaçao",
			"capital": "Willemstad",
			"languages": [
					"Dutch",
					"(Eastern) Punjabi",
					"English"
			],
			"population": 155014,
			"flag": "https://flagcdn.com/cw.svg",
			"region": "Americas",
			"area": 444
	},
	{
			"name": "Cyprus",
			"capital": "Nicosia",
			"languages": [
					"Greek (modern)",
					"Turkish",
					"Armenian"
			],
			"population": 1207361,
			"flag": "https://flagcdn.com/cy.svg",
			"region": "Europe",
			"area": 9251
	},
	{
			"name": "Czech Republic",
			"capital": "Prague",
			"languages": [
					"Czech",
					"Slovak"
			],
			"population": 10698896,
			"flag": "https://flagcdn.com/cz.svg",
			"region": "Europe",
			"area": 78865
	},
	{
			"name": "Denmark",
			"capital": "Copenhagen",
			"languages": [
					"Danish"
			],
			"population": 5831404,
			"flag": "https://flagcdn.com/dk.svg",
			"region": "Europe",
			"area": 43094
	},
	{
			"name": "Djibouti",
			"capital": "Djibouti",
			"languages": [
					"French",
					"Arabic"
			],
			"population": 988002,
			"flag": "https://flagcdn.com/dj.svg",
			"region": "Africa",
			"area": 23200
	},
	{
			"name": "Dominica",
			"capital": "Roseau",
			"languages": [
					"English"
			],
			"population": 71991,
			"flag": "https://flagcdn.com/dm.svg",
			"region": "Americas",
			"area": 751
	},
	{
			"name": "Dominican Republic",
			"capital": "Santo Domingo",
			"languages": [
					"Spanish"
			],
			"population": 10847904,
			"flag": "https://flagcdn.com/do.svg",
			"region": "Americas",
			"area": 48671
	},
	{
			"name": "Ecuador",
			"capital": "Quito",
			"languages": [
					"Spanish"
			],
			"population": 17643060,
			"flag": "https://flagcdn.com/ec.svg",
			"region": "Americas",
			"area": 276841
	},
	{
			"name": "Egypt",
			"capital": "Cairo",
			"languages": [
					"Arabic"
			],
			"population": 102334403,
			"flag": "https://flagcdn.com/eg.svg",
			"region": "Africa",
			"area": 1002450
	},
	{
			"name": "El Salvador",
			"capital": "San Salvador",
			"languages": [
					"Spanish"
			],
			"population": 6486201,
			"flag": "https://flagcdn.com/sv.svg",
			"region": "Americas",
			"area": 21041
	},
	{
			"name": "Equatorial Guinea",
			"capital": "Malabo",
			"languages": [
					"Spanish",
					"French",
					"Portuguese",
					"Fang"
			],
			"population": 1402985,
			"flag": "https://flagcdn.com/gq.svg",
			"region": "Africa",
			"area": 28051
	},
	{
			"name": "Eritrea",
			"capital": "Asmara",
			"languages": [
					"Tigrinya",
					"Arabic",
					"English",
					"Tigre",
					"Kunama",
					"Saho",
					"Bilen",
					"Nara",
					"Afar"
			],
			"population": 5352000,
			"flag": "https://flagcdn.com/er.svg",
			"region": "Africa",
			"area": 117600
	},
	{
			"name": "Estonia",
			"capital": "Tallinn",
			"languages": [
					"Estonian"
			],
			"population": 1331057,
			"flag": "https://flagcdn.com/ee.svg",
			"region": "Europe",
			"area": 45227
	},
	{
			"name": "Ethiopia",
			"capital": "Addis Ababa",
			"languages": [
					"Amharic"
			],
			"population": 114963583,
			"flag": "https://flagcdn.com/et.svg",
			"region": "Africa",
			"area": 1104300
	},
	{
			"name": "Falkland Islands (Malvinas)",
			"capital": "Stanley",
			"languages": [
					"English"
			],
			"population": 2563,
			"flag": "https://flagcdn.com/fk.svg",
			"region": "Americas",
			"area": 12173
	},
	{
			"name": "Faroe Islands",
			"capital": "Tórshavn",
			"languages": [
					"Faroese"
			],
			"population": 48865,
			"flag": "https://flagcdn.com/fo.svg",
			"region": "Europe",
			"area": 1393
	},
	{
			"name": "Fiji",
			"capital": "Suva",
			"languages": [
					"English",
					"Fijian",
					"Fiji Hindi",
					"Rotuman"
			],
			"population": 896444,
			"flag": "https://flagcdn.com/fj.svg",
			"region": "Oceania",
			"area": 18272
	},
	{
			"name": "Finland",
			"capital": "Helsinki",
			"languages": [
					"Finnish",
					"Swedish"
			],
			"population": 5530719,
			"flag": "https://flagcdn.com/fi.svg",
			"region": "Europe",
			"area": 338424
	},
	{
			"name": "France",
			"capital": "Paris",
			"languages": [
					"French"
			],
			"population": 67391582,
			"flag": "https://flagcdn.com/fr.svg",
			"region": "Europe",
			"area": 640679
	},
	{
			"name": "French Guiana",
			"capital": "Cayenne",
			"languages": [
					"French"
			],
			"population": 254541,
			"flag": "https://flagcdn.com/gf.svg",
			"region": "Americas"
	},
	{
			"name": "French Polynesia",
			"capital": "Papeetē",
			"languages": [
					"French"
			],
			"population": 280904,
			"flag": "https://flagcdn.com/pf.svg",
			"region": "Oceania",
			"area": 4167
	},
	{
			"name": "French Southern Territories",
			"capital": "Port-aux-Français",
			"languages": [
					"French"
			],
			"population": 140,
			"flag": "https://flagcdn.com/tf.svg",
			"region": "Africa",
			"area": 7747
	},
	{
			"name": "Gabon",
			"capital": "Libreville",
			"languages": [
					"French"
			],
			"population": 2225728,
			"flag": "https://flagcdn.com/ga.svg",
			"region": "Africa",
			"area": 267668
	},
	{
			"name": "Gambia",
			"capital": "Banjul",
			"languages": [
					"English"
			],
			"population": 2416664,
			"flag": "https://flagcdn.com/gm.svg",
			"region": "Africa",
			"area": 11295
	},
	{
			"name": "Georgia",
			"capital": "Tbilisi",
			"languages": [
					"Georgian"
			],
			"population": 3714000,
			"flag": "https://flagcdn.com/ge.svg",
			"region": "Asia",
			"area": 69700
	},
	{
			"name": "Germany",
			"capital": "Berlin",
			"languages": [
					"German"
			],
			"population": 83240525,
			"flag": "https://flagcdn.com/de.svg",
			"region": "Europe",
			"area": 357114
	},
	{
			"name": "Ghana",
			"capital": "Accra",
			"languages": [
					"English"
			],
			"population": 31072945,
			"flag": "https://flagcdn.com/gh.svg",
			"region": "Africa",
			"area": 238533
	},
	{
			"name": "Gibraltar",
			"capital": "Gibraltar",
			"languages": [
					"English"
			],
			"population": 33691,
			"flag": "https://flagcdn.com/gi.svg",
			"region": "Europe",
			"area": 6
	},
	{
			"name": "Greece",
			"capital": "Athens",
			"languages": [
					"Greek (modern)"
			],
			"population": 10715549,
			"flag": "https://flagcdn.com/gr.svg",
			"region": "Europe",
			"area": 131990
	},
	{
			"name": "Greenland",
			"capital": "Nuuk",
			"languages": [
					"Kalaallisut"
			],
			"population": 56367,
			"flag": "https://flagcdn.com/gl.svg",
			"region": "Americas",
			"area": 2166086
	},
	{
			"name": "Grenada",
			"capital": "St. George's",
			"languages": [
					"English"
			],
			"population": 112519,
			"flag": "https://flagcdn.com/gd.svg",
			"region": "Americas",
			"area": 344
	},
	{
			"name": "Guadeloupe",
			"capital": "Basse-Terre",
			"languages": [
					"French"
			],
			"population": 400132,
			"flag": "https://flagcdn.com/gp.svg",
			"region": "Americas"
	},
	{
			"name": "Guam",
			"capital": "Hagåtña",
			"languages": [
					"English",
					"Chamorro",
					"Spanish"
			],
			"population": 168783,
			"flag": "https://flagcdn.com/gu.svg",
			"region": "Oceania",
			"area": 549
	},
	{
			"name": "Guatemala",
			"capital": "Guatemala City",
			"languages": [
					"Spanish"
			],
			"population": 16858333,
			"flag": "https://flagcdn.com/gt.svg",
			"region": "Americas",
			"area": 108889
	},
	{
			"name": "Guernsey",
			"capital": "St. Peter Port",
			"languages": [
					"English",
					"French"
			],
			"population": 62999,
			"flag": "https://flagcdn.com/gg.svg",
			"region": "Europe",
			"area": 78
	},
	{
			"name": "Guinea",
			"capital": "Conakry",
			"languages": [
					"French",
					"Fula"
			],
			"population": 13132792,
			"flag": "https://flagcdn.com/gn.svg",
			"region": "Africa",
			"area": 245857
	},
	{
			"name": "Guinea-Bissau",
			"capital": "Bissau",
			"languages": [
					"Portuguese"
			],
			"population": 1967998,
			"flag": "https://flagcdn.com/gw.svg",
			"region": "Africa",
			"area": 36125
	},
	{
			"name": "Guyana",
			"capital": "Georgetown",
			"languages": [
					"English"
			],
			"population": 786559,
			"flag": "https://flagcdn.com/gy.svg",
			"region": "Americas",
			"area": 214969
	},
	{
			"name": "Haiti",
			"capital": "Port-au-Prince",
			"languages": [
					"French",
					"Haitian"
			],
			"population": 11402533,
			"flag": "https://flagcdn.com/ht.svg",
			"region": "Americas",
			"area": 27750
	},
	{
			"name": "Heard Island and McDonald Islands",
			"languages": [
					"English"
			],
			"population": 0,
			"flag": "https://flagcdn.com/hm.svg",
			"region": "Antarctic",
			"area": 412
	},
	{
			"name": "Vatican City",
			"capital": "Vatican City",
			"languages": [
					"Latin",
					"Italian",
					"French",
					"German"
			],
			"population": 451,
			"flag": "https://flagcdn.com/va.svg",
			"region": "Europe",
			"area": 0.44
	},
	{
			"name": "Honduras",
			"capital": "Tegucigalpa",
			"languages": [
					"Spanish"
			],
			"population": 9904608,
			"flag": "https://flagcdn.com/hn.svg",
			"region": "Americas",
			"area": 112492
	},
	{
			"name": "Hungary",
			"capital": "Budapest",
			"languages": [
					"Hungarian"
			],
			"population": 9749763,
			"flag": "https://flagcdn.com/hu.svg",
			"region": "Europe",
			"area": 93028
	},
	{
			"name": "Hong Kong",
			"capital": "City of Victoria",
			"languages": [
					"English",
					"Chinese"
			],
			"population": 7481800,
			"flag": "https://flagcdn.com/hk.svg",
			"region": "Asia",
			"area": 1104
	},
	{
			"name": "Iceland",
			"capital": "Reykjavík",
			"languages": [
					"Icelandic"
			],
			"population": 366425,
			"flag": "https://flagcdn.com/is.svg",
			"region": "Europe",
			"area": 103000
	},
	{
			"name": "India",
			"capital": "New Delhi",
			"languages": [
					"Hindi",
					"English"
			],
			"population": 1380004385,
			"flag": "https://flagcdn.com/in.svg",
			"region": "Asia",
			"area": 3287590
	},
	{
			"name": "Indonesia",
			"capital": "Jakarta",
			"languages": [
					"Indonesian"
			],
			"population": 273523621,
			"flag": "https://flagcdn.com/id.svg",
			"region": "Asia",
			"area": 1904569
	},
	{
			"name": "Ivory Coast",
			"capital": "Yamoussoukro",
			"languages": [
					"French"
			],
			"population": 26378275,
			"flag": "https://flagcdn.com/ci.svg",
			"region": "Africa",
			"area": 322463
	},
	{
			"name": "Iran (Islamic Republic of)",
			"capital": "Tehran",
			"languages": [
					"Persian (Farsi)"
			],
			"population": 83992953,
			"flag": "https://flagcdn.com/ir.svg",
			"region": "Asia",
			"area": 1648195
	},
	{
			"name": "Iraq",
			"capital": "Baghdad",
			"languages": [
					"Arabic",
					"Kurdish"
			],
			"population": 40222503,
			"flag": "https://flagcdn.com/iq.svg",
			"region": "Asia",
			"area": 438317
	},
	{
			"name": "Ireland",
			"capital": "Dublin",
			"languages": [
					"Irish",
					"English"
			],
			"population": 4994724,
			"flag": "https://flagcdn.com/ie.svg",
			"region": "Europe",
			"area": 70273
	},
	{
			"name": "Isle of Man",
			"capital": "Douglas",
			"languages": [
					"English",
					"Manx"
			],
			"population": 85032,
			"flag": "https://flagcdn.com/im.svg",
			"region": "Europe",
			"area": 572
	},
	{
			"name": "Israel",
			"capital": "Jerusalem",
			"languages": [
					"Hebrew (modern)",
					"Arabic"
			],
			"population": 9216900,
			"flag": "https://flagcdn.com/il.svg",
			"region": "Asia",
			"area": 20770
	},
	{
			"name": "Italy",
			"capital": "Rome",
			"languages": [
					"Italian"
			],
			"population": 59554023,
			"flag": "https://flagcdn.com/it.svg",
			"region": "Europe",
			"area": 301336
	},
	{
			"name": "Jamaica",
			"capital": "Kingston",
			"languages": [
					"English"
			],
			"population": 2961161,
			"flag": "https://flagcdn.com/jm.svg",
			"region": "Americas",
			"area": 10991
	},
	{
			"name": "Japan",
			"capital": "Tokyo",
			"languages": [
					"Japanese"
			],
			"population": 125836021,
			"flag": "https://flagcdn.com/jp.svg",
			"region": "Asia",
			"area": 377930
	},
	{
			"name": "Jersey",
			"capital": "Saint Helier",
			"languages": [
					"English",
					"French"
			],
			"population": 100800,
			"flag": "https://flagcdn.com/je.svg",
			"region": "Europe",
			"area": 116
	},
	{
			"name": "Jordan",
			"capital": "Amman",
			"languages": [
					"Arabic"
			],
			"population": 10203140,
			"flag": "https://flagcdn.com/jo.svg",
			"region": "Asia",
			"area": 89342
	},
	{
			"name": "Kazakhstan",
			"capital": "Nur-Sultan",
			"languages": [
					"Kazakh",
					"Russian"
			],
			"population": 18754440,
			"flag": "https://flagcdn.com/kz.svg",
			"region": "Asia",
			"area": 2724900
	},
	{
			"name": "Kenya",
			"capital": "Nairobi",
			"languages": [
					"English",
					"Swahili"
			],
			"population": 53771300,
			"flag": "https://flagcdn.com/ke.svg",
			"region": "Africa",
			"area": 580367
	},
	{
			"name": "Kiribati",
			"capital": "South Tarawa",
			"languages": [
					"English"
			],
			"population": 119446,
			"flag": "https://flagcdn.com/ki.svg",
			"region": "Oceania",
			"area": 811
	},
	{
			"name": "Kuwait",
			"capital": "Kuwait City",
			"languages": [
					"Arabic"
			],
			"population": 4270563,
			"flag": "https://flagcdn.com/kw.svg",
			"region": "Asia",
			"area": 17818
	},
	{
			"name": "Kyrgyzstan",
			"capital": "Bishkek",
			"languages": [
					"Kyrgyz",
					"Russian"
			],
			"population": 6591600,
			"flag": "https://flagcdn.com/kg.svg",
			"region": "Asia",
			"area": 199951
	},
	{
			"name": "Lao People's Democratic Republic",
			"capital": "Vientiane",
			"languages": [
					"Lao"
			],
			"population": 7275556,
			"flag": "https://flagcdn.com/la.svg",
			"region": "Asia",
			"area": 236800
	},
	{
			"name": "Latvia",
			"capital": "Riga",
			"languages": [
					"Latvian"
			],
			"population": 1901548,
			"flag": "https://flagcdn.com/lv.svg",
			"region": "Europe",
			"area": 64559
	},
	{
			"name": "Lebanon",
			"capital": "Beirut",
			"languages": [
					"Arabic",
					"French"
			],
			"population": 6825442,
			"flag": "https://flagcdn.com/lb.svg",
			"region": "Asia",
			"area": 10452
	},
	{
			"name": "Lesotho",
			"capital": "Maseru",
			"languages": [
					"English",
					"Southern Sotho"
			],
			"population": 2142252,
			"flag": "https://flagcdn.com/ls.svg",
			"region": "Africa",
			"area": 30355
	},
	{
			"name": "Liberia",
			"capital": "Monrovia",
			"languages": [
					"English"
			],
			"population": 5057677,
			"flag": "https://flagcdn.com/lr.svg",
			"region": "Africa",
			"area": 111369
	},
	{
			"name": "Libya",
			"capital": "Tripoli",
			"languages": [
					"Arabic"
			],
			"population": 6871287,
			"flag": "https://flagcdn.com/ly.svg",
			"region": "Africa",
			"area": 1759540
	},
	{
			"name": "Liechtenstein",
			"capital": "Vaduz",
			"languages": [
					"German"
			],
			"population": 38137,
			"flag": "https://flagcdn.com/li.svg",
			"region": "Europe",
			"area": 160
	},
	{
			"name": "Lithuania",
			"capital": "Vilnius",
			"languages": [
					"Lithuanian"
			],
			"population": 2794700,
			"flag": "https://flagcdn.com/lt.svg",
			"region": "Europe",
			"area": 65300
	},
	{
			"name": "Luxembourg",
			"capital": "Luxembourg",
			"languages": [
					"French",
					"German",
					"Luxembourgish"
			],
			"population": 632275,
			"flag": "https://flagcdn.com/lu.svg",
			"region": "Europe",
			"area": 2586
	},
	{
			"name": "Macao",
			"languages": [
					"Chinese",
					"Portuguese"
			],
			"population": 649342,
			"flag": "https://flagcdn.com/mo.svg",
			"region": "Asia",
			"area": 30
	},
	{
			"name": "North Macedonia",
			"capital": "Skopje",
			"languages": [
					"Macedonian"
			],
			"population": 2083380,
			"flag": "https://flagcdn.com/mk.svg",
			"region": "Europe",
			"area": 25713
	},
	{
			"name": "Madagascar",
			"capital": "Antananarivo",
			"languages": [
					"French",
					"Malagasy"
			],
			"population": 27691019,
			"flag": "https://flagcdn.com/mg.svg",
			"region": "Africa",
			"area": 587041
	},
	{
			"name": "Malawi",
			"capital": "Lilongwe",
			"languages": [
					"English",
					"Chichewa"
			],
			"population": 19129955,
			"flag": "https://flagcdn.com/mw.svg",
			"region": "Africa",
			"area": 118484
	},
	{
			"name": "Malaysia",
			"capital": "Kuala Lumpur",
			"languages": [
					"Malaysian"
			],
			"population": 32365998,
			"flag": "https://flagcdn.com/my.svg",
			"region": "Asia",
			"area": 330803
	},
	]