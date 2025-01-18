// app.js

// Education Data
const educationData = [
	{
		"fips": 1001,
		"state": "AL",
		"area_name": "Autauga County",
		"bachelorsOrHigher": 21.9
	},
	{
		"fips": 1003,
		"state": "AL",
		"area_name": "Baldwin County",
		"bachelorsOrHigher": 28.6
	},
	{
		"fips": 1005,
		"state": "AL",
		"area_name": "Barbour County",
		"bachelorsOrHigher": 13.6
	},
	{
		"fips": 1007,
		"state": "AL",
		"area_name": "Bibb County",
		"bachelorsOrHigher": 10.2
	},
	{
		"fips": 1009,
		"state": "AL",
		"area_name": "Blount County",
		"bachelorsOrHigher": 12.3
	},
	{
		"fips": 1011,
		"state": "AL",
		"area_name": "Bullock County",
		"bachelorsOrHigher": 14.1
	},
	{
		"fips": 1013,
		"state": "AL",
		"area_name": "Butler County",
		"bachelorsOrHigher": 14.3
	},
	{
		"fips": 1015,
		"state": "AL",
		"area_name": "Calhoun County",
		"bachelorsOrHigher": 16.9
	},
	{
		"fips": 1017,
		"state": "AL",
		"area_name": "Chambers County",
		"bachelorsOrHigher": 12.2
	},
	{
		"fips": 1019,
		"state": "AL",
		"area_name": "Cherokee County",
		"bachelorsOrHigher": 13.7
	},
	{
		"fips": 1021,
		"state": "AL",
		"area_name": "Chilton County",
		"bachelorsOrHigher": 13.5
	},
	{
		"fips": 1023,
		"state": "AL",
		"area_name": "Choctaw County",
		"bachelorsOrHigher": 12.8
	},
	{
		"fips": 1025,
		"state": "AL",
		"area_name": "Clarke County",
		"bachelorsOrHigher": 11.9
	},
	{
		"fips": 1027,
		"state": "AL",
		"area_name": "Clay County",
		"bachelorsOrHigher": 8.6
	},
	{
		"fips": 1029,
		"state": "AL",
		"area_name": "Cleburne County",
		"bachelorsOrHigher": 10.6
	},
	{
		"fips": 1031,
		"state": "AL",
		"area_name": "Coffee County",
		"bachelorsOrHigher": 23.2
	},
	{
		"fips": 1033,
		"state": "AL",
		"area_name": "Colbert County",
		"bachelorsOrHigher": 17.6
	},
	{
		"fips": 1035,
		"state": "AL",
		"area_name": "Conecuh County",
		"bachelorsOrHigher": 8.3
	},
	{
		"fips": 1037,
		"state": "AL",
		"area_name": "Coosa County",
		"bachelorsOrHigher": 9.1
	},
	{
		"fips": 1039,
		"state": "AL",
		"area_name": "Covington County",
		"bachelorsOrHigher": 14.6
	},
	{
		"fips": 1041,
		"state": "AL",
		"area_name": "Crenshaw County",
		"bachelorsOrHigher": 12.5
	},
	{
		"fips": 1043,
		"state": "AL",
		"area_name": "Cullman County",
		"bachelorsOrHigher": 15.1
	},
	{
		"fips": 1045,
		"state": "AL",
		"area_name": "Dale County",
		"bachelorsOrHigher": 16.9
	},
	{
		"fips": 1047,
		"state": "AL",
		"area_name": "Dallas County",
		"bachelorsOrHigher": 14.5
	},
	{
		"fips": 1049,
		"state": "AL",
		"area_name": "DeKalb County",
		"bachelorsOrHigher": 11.3
	},
	{
		"fips": 1051,
		"state": "AL",
		"area_name": "Elmore County",
		"bachelorsOrHigher": 21.4
	},
	{
		"fips": 1053,
		"state": "AL",
		"area_name": "Escambia County",
		"bachelorsOrHigher": 12.5
	},
	{
		"fips": 1055,
		"state": "AL",
		"area_name": "Etowah County",
		"bachelorsOrHigher": 15.4
	},
	{
		"fips": 1057,
		"state": "AL",
		"area_name": "Fayette County",
		"bachelorsOrHigher": 13.8
	},
	{
		"fips": 1059,
		"state": "AL",
		"area_name": "Franklin County",
		"bachelorsOrHigher": 10.9
	},
	{
		"fips": 1061,
		"state": "AL",
		"area_name": "Geneva County",
		"bachelorsOrHigher": 11.2
	},
	{
		"fips": 1063,
		"state": "AL",
		"area_name": "Greene County",
		"bachelorsOrHigher": 11.5
	},
	{
		"fips": 1065,
		"state": "AL",
		"area_name": "Hale County",
		"bachelorsOrHigher": 14
	},
	{
		"fips": 1067,
		"state": "AL",
		"area_name": "Henry County",
		"bachelorsOrHigher": 16.8
	},
	{
		"fips": 1069,
		"state": "AL",
		"area_name": "Houston County",
		"bachelorsOrHigher": 20.1
	},
	{
		"fips": 1071,
		"state": "AL",
		"area_name": "Jackson County",
		"bachelorsOrHigher": 12.9
	},
	{
		"fips": 1073,
		"state": "AL",
		"area_name": "Jefferson County",
		"bachelorsOrHigher": 30.3
	},
	{
		"fips": 1075,
		"state": "AL",
		"area_name": "Lamar County",
		"bachelorsOrHigher": 11.4
	},
	{
		"fips": 1077,
		"state": "AL",
		"area_name": "Lauderdale County",
		"bachelorsOrHigher": 22.1
	},
	{
		"fips": 1079,
		"state": "AL",
		"area_name": "Lawrence County",
		"bachelorsOrHigher": 11.3
	},
	{
		"fips": 1081,
		"state": "AL",
		"area_name": "Lee County",
		"bachelorsOrHigher": 33.2
	},
	{
		"fips": 1083,
		"state": "AL",
		"area_name": "Limestone County",
		"bachelorsOrHigher": 23.1
	},
	{
		"fips": 1085,
		"state": "AL",
		"area_name": "Lowndes County",
		"bachelorsOrHigher": 13.2
	},
	{
		"fips": 1087,
		"state": "AL",
		"area_name": "Macon County",
		"bachelorsOrHigher": 19.4
	},
	{
		"fips": 1089,
		"state": "AL",
		"area_name": "Madison County",
		"bachelorsOrHigher": 38.6
	},
	{
		"fips": 1091,
		"state": "AL",
		"area_name": "Marengo County",
		"bachelorsOrHigher": 16
	},
	{
		"fips": 1093,
		"state": "AL",
		"area_name": "Marion County",
		"bachelorsOrHigher": 11.1
	},
	{
		"fips": 1095,
		"state": "AL",
		"area_name": "Marshall County",
		"bachelorsOrHigher": 16.1
	},
	{
		"fips": 1097,
		"state": "AL",
		"area_name": "Mobile County",
		"bachelorsOrHigher": 21.4
	},
	{
		"fips": 1099,
		"state": "AL",
		"area_name": "Monroe County",
		"bachelorsOrHigher": 12.5
	},
	{
		"fips": 1101,
		"state": "AL",
		"area_name": "Montgomery County",
		"bachelorsOrHigher": 31.3
	},
	{
		"fips": 1103,
		"state": "AL",
		"area_name": "Morgan County",
		"bachelorsOrHigher": 19.9
	},
	{
		"fips": 1105,
		"state": "AL",
		"area_name": "Perry County",
		"bachelorsOrHigher": 9.1
	},
	{
		"fips": 1107,
		"state": "AL",
		"area_name": "Pickens County",
		"bachelorsOrHigher": 9.6
	},
	{
		"fips": 1109,
		"state": "AL",
		"area_name": "Pike County",
		"bachelorsOrHigher": 23.6
	},
	{
		"fips": 1111,
		"state": "AL",
		"area_name": "Randolph County",
		"bachelorsOrHigher": 12.4
	},
	{
		"fips": 1113,
		"state": "AL",
		"area_name": "Russell County",
		"bachelorsOrHigher": 15.5
	},
	{
		"fips": 1115,
		"state": "AL",
		"area_name": "St. Clair County",
		"bachelorsOrHigher": 15.5
	},
	{
		"fips": 1117,
		"state": "AL",
		"area_name": "Shelby County",
		"bachelorsOrHigher": 40.2
	},
	{
		"fips": 1119,
		"state": "AL",
		"area_name": "Sumter County",
		"bachelorsOrHigher": 15
	},
	{
		"fips": 1121,
		"state": "AL",
		"area_name": "Talladega County",
		"bachelorsOrHigher": 12.5
	},
	{
		"fips": 1123,
		"state": "AL",
		"area_name": "Tallapoosa County",
		"bachelorsOrHigher": 17.6
	},
	{
		"fips": 1125,
		"state": "AL",
		"area_name": "Tuscaloosa County",
		"bachelorsOrHigher": 27.7
	},
	{
		"fips": 1127,
		"state": "AL",
		"area_name": "Walker County",
		"bachelorsOrHigher": 10.7
	},
	{
		"fips": 1129,
		"state": "AL",
		"area_name": "Washington County",
		"bachelorsOrHigher": 10.3
	},
	{
		"fips": 1131,
		"state": "AL",
		"area_name": "Wilcox County",
		"bachelorsOrHigher": 11.5
	},
	{
		"fips": 1133,
		"state": "AL",
		"area_name": "Winston County",
		"bachelorsOrHigher": 11.1
	},
	{
		"fips": 2013,
		"state": "AK",
		"area_name": "Aleutians East Borough",
		"bachelorsOrHigher": 12.6
	},
	{
		"fips": 2016,
		"state": "AK",
		"area_name": "Aleutians West Census Area",
		"bachelorsOrHigher": 15.4
	},
	{
		"fips": 2020,
		"state": "AK",
		"area_name": "Anchorage Municipality",
		"bachelorsOrHigher": 32.9
	},
	{
		"fips": 2050,
		"state": "AK",
		"area_name": "Bethel Census Area",
		"bachelorsOrHigher": 11.4
	},
	{
		"fips": 2060,
		"state": "AK",
		"area_name": "Bristol Bay Borough",
		"bachelorsOrHigher": 20.2
	},
	{
		"fips": 2068,
		"state": "AK",
		"area_name": "Denali Borough",
		"bachelorsOrHigher": 29.5
	},
	{
		"fips": 2070,
		"state": "AK",
		"area_name": "Dillingham Census Area",
		"bachelorsOrHigher": 16.6
	},
	{
		"fips": 2090,
		"state": "AK",
		"area_name": "Fairbanks North Star Borough",
		"bachelorsOrHigher": 30.5
	},
	{
		"fips": 2100,
		"state": "AK",
		"area_name": "Haines Borough",
		"bachelorsOrHigher": 31.3
	},
	{
		"fips": 2105,
		"state": "AK",
		"area_name": "Hoonah-Angoon Census Area",
		"bachelorsOrHigher": 29.3
	},
	{
		"fips": 2110,
		"state": "AK",
		"area_name": "Juneau City and Borough",
		"bachelorsOrHigher": 37.8
	},
	{
		"fips": 2122,
		"state": "AK",
		"area_name": "Kenai Peninsula Borough",
		"bachelorsOrHigher": 23.3
	},
	{
		"fips": 2130,
		"state": "AK",
		"area_name": "Ketchikan Gateway Borough",
		"bachelorsOrHigher": 24.6
	},
	{
		"fips": 2150,
		"state": "AK",
		"area_name": "Kodiak Island Borough",
		"bachelorsOrHigher": 21.6
	},
	{
		"fips": 2164,
		"state": "AK",
		"area_name": "Lake and Peninsula Borough",
		"bachelorsOrHigher": 13.7
	},
	{
		"fips": 2170,
		"state": "AK",
		"area_name": "Matanuska-Susitna Borough",
		"bachelorsOrHigher": 20.9
	},
	{
		"fips": 2180,
		"state": "AK",
		"area_name": "Nome Census Area",
		"bachelorsOrHigher": 14.7
	},
	{
		"fips": 2185,
		"state": "AK",
		"area_name": "North Slope Borough",
		"bachelorsOrHigher": 13.4
	},
	{
		"fips": 2188,
		"state": "AK",
		"area_name": "Northwest Arctic Borough",
		"bachelorsOrHigher": 12
	},
	{
		"fips": 2195,
		"state": "AK",
		"area_name": "Petersburg Census Area",
		"bachelorsOrHigher": 25.2
	},
	{
		"fips": 2198,
		"state": "AK",
		"area_name": "Prince of Wales-Hyder Census Area",
		"bachelorsOrHigher": 16.3
	},
	{
		"fips": 2220,
		"state": "AK",
		"area_name": "Sitka City and Borough",
		"bachelorsOrHigher": 32.9
	},
	{
		"fips": 2230,
		"state": "AK",
		"area_name": "Skagway Municipality",
		"bachelorsOrHigher": 34.6
	},
	{
		"fips": 2240,
		"state": "AK",
		"area_name": "Southeast Fairbanks Census Area",
		"bachelorsOrHigher": 20.7
	},
	{
		"fips": 2261,
		"state": "AK",
		"area_name": "Valdez-Cordova Census Area",
		"bachelorsOrHigher": 24.1
	},
	{
		"fips": 2158,
		"state": "AK",
		"area_name": "Kusilvak Census Area",
		"bachelorsOrHigher": 4.5
	},
	{
		"fips": 2275,
		"state": "AK",
		"area_name": "Wrangell City and Borough",
		"bachelorsOrHigher": 18.7
	},
	{
		"fips": 2282,
		"state": "AK",
		"area_name": "Yakutat City and Borough",
		"bachelorsOrHigher": 20.3
	},
	{
		"fips": 2290,
		"state": "AK",
		"area_name": "Yukon-Koyukuk Census Area",
		"bachelorsOrHigher": 10.1
	},
	{
		"fips": 4001,
		"state": "AZ",
		"area_name": "Apache County",
		"bachelorsOrHigher": 10.1
	},
	{
		"fips": 4003,
		"state": "AZ",
		"area_name": "Cochise County",
		"bachelorsOrHigher": 23.1
	},
	{
		"fips": 4005,
		"state": "AZ",
		"area_name": "Coconino County",
		"bachelorsOrHigher": 32.8
	},
	{
		"fips": 4007,
		"state": "AZ",
		"area_name": "Gila County",
		"bachelorsOrHigher": 17.1
	},
	{
		"fips": 4009,
		"state": "AZ",
		"area_name": "Graham County",
		"bachelorsOrHigher": 13.6
	},
	{
		"fips": 4011,
		"state": "AZ",
		"area_name": "Greenlee County",
		"bachelorsOrHigher": 11.8
	},
	{
		"fips": 4012,
		"state": "AZ",
		"area_name": "La Paz County",
		"bachelorsOrHigher": 10.2
	},
	{
		"fips": 4013,
		"state": "AZ",
		"area_name": "Maricopa County",
		"bachelorsOrHigher": 30
	},
	{
		"fips": 4015,
		"state": "AZ",
		"area_name": "Mohave County",
		"bachelorsOrHigher": 12.2
	},
	{
		"fips": 4017,
		"state": "AZ",
		"area_name": "Navajo County",
		"bachelorsOrHigher": 14.5
	},
	{
		"fips": 4019,
		"state": "AZ",
		"area_name": "Pima County",
		"bachelorsOrHigher": 30.1
	},
	{
		"fips": 4021,
		"state": "AZ",
		"area_name": "Pinal County",
		"bachelorsOrHigher": 17.8
	},
	{
		"fips": 4023,
		"state": "AZ",
		"area_name": "Santa Cruz County",
		"bachelorsOrHigher": 22
	},
	{
		"fips": 4025,
		"state": "AZ",
		"area_name": "Yavapai County",
		"bachelorsOrHigher": 24.9
	},
	{
		"fips": 4027,
		"state": "AZ",
		"area_name": "Yuma County",
		"bachelorsOrHigher": 14
	},
	{
		"fips": 5001,
		"state": "AR",
		"area_name": "Arkansas County",
		"bachelorsOrHigher": 13.9
	},
	{
		"fips": 5003,
		"state": "AR",
		"area_name": "Ashley County",
		"bachelorsOrHigher": 12.7
	},
	{
		"fips": 5005,
		"state": "AR",
		"area_name": "Baxter County",
		"bachelorsOrHigher": 17.4
	},
	{
		"fips": 5007,
		"state": "AR",
		"area_name": "Benton County",
		"bachelorsOrHigher": 29.6
	},
	{
		"fips": 5009,
		"state": "AR",
		"area_name": "Boone County",
		"bachelorsOrHigher": 15.1
	},
	{
		"fips": 5011,
		"state": "AR",
		"area_name": "Bradley County",
		"bachelorsOrHigher": 11.2
	},
	{
		"fips": 5013,
		"state": "AR",
		"area_name": "Calhoun County",
		"bachelorsOrHigher": 10.6
	},
	{
		"fips": 5015,
		"state": "AR",
		"area_name": "Carroll County",
		"bachelorsOrHigher": 17
	},
	{
		"fips": 5017,
		"state": "AR",
		"area_name": "Chicot County",
		"bachelorsOrHigher": 11.3
	},
	{
		"fips": 5019,
		"state": "AR",
		"area_name": "Clark County",
		"bachelorsOrHigher": 22.3
	},
	{
		"fips": 5021,
		"state": "AR",
		"area_name": "Clay County",
		"bachelorsOrHigher": 9.8
	},
	{
		"fips": 5023,
		"state": "AR",
		"area_name": "Cleburne County",
		"bachelorsOrHigher": 17.2
	},
	{
		"fips": 5025,
		"state": "AR",
		"area_name": "Cleveland County",
		"bachelorsOrHigher": 14.6
	},
	{
		"fips": 5027,
		"state": "AR",
		"area_name": "Columbia County",
		"bachelorsOrHigher": 21.3
	},
	{
		"fips": 5029,
		"state": "AR",
		"area_name": "Conway County",
		"bachelorsOrHigher": 16.5
	},
	{
		"fips": 5031,
		"state": "AR",
		"area_name": "Craighead County",
		"bachelorsOrHigher": 24.8
	},
	{
		"fips": 5033,
		"state": "AR",
		"area_name": "Crawford County",
		"bachelorsOrHigher": 14.3
	},
	{
		"fips": 5035,
		"state": "AR",
		"area_name": "Crittenden County",
		"bachelorsOrHigher": 14.6
	},
	{
		"fips": 5037,
		"state": "AR",
		"area_name": "Cross County",
		"bachelorsOrHigher": 12.4
	},
	{
		"fips": 5039,
		"state": "AR",
		"area_name": "Dallas County",
		"bachelorsOrHigher": 11.8
	},
	{
		"fips": 5041,
		"state": "AR",
		"area_name": "Desha County",
		"bachelorsOrHigher": 11.6
	},
	{
		"fips": 5043,
		"state": "AR",
		"area_name": "Drew County",
		"bachelorsOrHigher": 20.4
	},
	{
		"fips": 5045,
		"state": "AR",
		"area_name": "Faulkner County",
		"bachelorsOrHigher": 27.3
	},
	{
		"fips": 5047,
		"state": "AR",
		"area_name": "Franklin County",
		"bachelorsOrHigher": 12.6
	},
	{
		"fips": 5049,
		"state": "AR",
		"area_name": "Fulton County",
		"bachelorsOrHigher": 10.7
	},
	{
		"fips": 5051,
		"state": "AR",
		"area_name": "Garland County",
		"bachelorsOrHigher": 21
	},
	{
		"fips": 5053,
		"state": "AR",
		"area_name": "Grant County",
		"bachelorsOrHigher": 15.3
	},
	{
		"fips": 5055,
		"state": "AR",
		"area_name": "Greene County",
		"bachelorsOrHigher": 14.9
	},
	{
		"fips": 5057,
		"state": "AR",
		"area_name": "Hempstead County",
		"bachelorsOrHigher": 14
	},
	{
		"fips": 5059,
		"state": "AR",
		"area_name": "Hot Spring County",
		"bachelorsOrHigher": 14.1
	},
	{
		"fips": 5061,
		"state": "AR",
		"area_name": "Howard County",
		"bachelorsOrHigher": 14.4
	},
	{
		"fips": 5063,
		"state": "AR",
		"area_name": "Independence County",
		"bachelorsOrHigher": 14.8
	},
	{
		"fips": 5065,
		"state": "AR",
		"area_name": "Izard County",
		"bachelorsOrHigher": 12.3
	},
	{
		"fips": 5067,
		"state": "AR",
		"area_name": "Jackson County",
		"bachelorsOrHigher": 7.9
	},
	{
		"fips": 5069,
		"state": "AR",
		"area_name": "Jefferson County",
		"bachelorsOrHigher": 17.1
	},
	{
		"fips": 5071,
		"state": "AR",
		"area_name": "Johnson County",
		"bachelorsOrHigher": 16.3
	},
	{
		"fips": 5073,
		"state": "AR",
		"area_name": "Lafayette County",
		"bachelorsOrHigher": 12.4
	},
	{
		"fips": 5075,
		"state": "AR",
		"area_name": "Lawrence County",
		"bachelorsOrHigher": 11.8
	},
	{
		"fips": 5077,
		"state": "AR",
		"area_name": "Lee County",
		"bachelorsOrHigher": 6.4
	},
	{
		"fips": 5079,
		"state": "AR",
		"area_name": "Lincoln County",
		"bachelorsOrHigher": 8.5
	},
	{
		"fips": 5081,
		"state": "AR",
		"area_name": "Little River County",
		"bachelorsOrHigher": 11.8
	},
	{
		"fips": 5083,
		"state": "AR",
		"area_name": "Logan County",
		"bachelorsOrHigher": 11.8
	},
	{
		"fips": 5085,
		"state": "AR",
		"area_name": "Lonoke County",
		"bachelorsOrHigher": 18.7
	},
	{
		"fips": 5087,
		"state": "AR",
		"area_name": "Madison County",
		"bachelorsOrHigher": 9.7
	},
	{
		"fips": 5089,
		"state": "AR",
		"area_name": "Marion County",
		"bachelorsOrHigher": 12.8
	},
	{
		"fips": 5091,
		"state": "AR",
		"area_name": "Miller County",
		"bachelorsOrHigher": 12.7
	},
	{
		"fips": 5093,
		"state": "AR",
		"area_name": "Mississippi County",
		"bachelorsOrHigher": 13.1
	},
	{
		"fips": 5095,
		"state": "AR",
		"area_name": "Monroe County",
		"bachelorsOrHigher": 12.1
	},
	{
		"fips": 5097,
		"state": "AR",
		"area_name": "Montgomery County",
		"bachelorsOrHigher": 13.6
	},
	{
		"fips": 5099,
		"state": "AR",
		"area_name": "Nevada County",
		"bachelorsOrHigher": 14.2
	},
	{
		"fips": 5101,
		"state": "AR",
		"area_name": "Newton County",
		"bachelorsOrHigher": 11.3
	},
	{
		"fips": 5103,
		"state": "AR",
		"area_name": "Ouachita County",
		"bachelorsOrHigher": 15.9
	},
	{
		"fips": 5105,
		"state": "AR",
		"area_name": "Perry County",
		"bachelorsOrHigher": 14.4
	},
	{
		"fips": 5107,
		"state": "AR",
		"area_name": "Phillips County",
		"bachelorsOrHigher": 12.9
	},
	{
		"fips": 5109,
		"state": "AR",
		"area_name": "Pike County",
		"bachelorsOrHigher": 12.8
	},
	{
		"fips": 5111,
		"state": "AR",
		"area_name": "Poinsett County",
		"bachelorsOrHigher": 8
	},
	{
		"fips": 5113,
		"state": "AR",
		"area_name": "Polk County",
		"bachelorsOrHigher": 12.6
	},
	{
		"fips": 5115,
		"state": "AR",
		"area_name": "Pope County",
		"bachelorsOrHigher": 21.1
	},
	{
		"fips": 5117,
		"state": "AR",
		"area_name": "Prairie County",
		"bachelorsOrHigher": 10.4
	},
	{
		"fips": 5119,
		"state": "AR",
		"area_name": "Pulaski County",
		"bachelorsOrHigher": 32
	},
	{
		"fips": 5121,
		"state": "AR",
		"area_name": "Randolph County",
		"bachelorsOrHigher": 14.4
	},
	{
		"fips": 5123,
		"state": "AR",
		"area_name": "St. Francis County",
		"bachelorsOrHigher": 11.8
	},
	{
		"fips": 5125,
		"state": "AR",
		"area_name": "Saline County",
		"bachelorsOrHigher": 23
	},
	{
		"fips": 5127,
		"state": "AR",
		"area_name": "Scott County",
		"bachelorsOrHigher": 12.2
	},
	{
		"fips": 5129,
		"state": "AR",
		"area_name": "Searcy County",
		"bachelorsOrHigher": 13.9
	},
	{
		"fips": 5131,
		"state": "AR",
		"area_name": "Sebastian County",
		"bachelorsOrHigher": 19.7
	},
	{
		"fips": 5133,
		"state": "AR",
		"area_name": "Sevier County",
		"bachelorsOrHigher": 8.3
	},
	{
		"fips": 5135,
		"state": "AR",
		"area_name": "Sharp County",
		"bachelorsOrHigher": 10.6
	},
	{
		"fips": 5137,
		"state": "AR",
		"area_name": "Stone County",
		"bachelorsOrHigher": 16.3
	},
	{
		"fips": 5139,
		"state": "AR",
		"area_name": "Union County",
		"bachelorsOrHigher": 17.4
	},
	{
		"fips": 5141,
		"state": "AR",
		"area_name": "Van Buren County",
		"bachelorsOrHigher": 12.2
	},
	{
		"fips": 5143,
		"state": "AR",
		"area_name": "Washington County",
		"bachelorsOrHigher": 29.3
	},
	{
		"fips": 5145,
		"state": "AR",
		"area_name": "White County",
		"bachelorsOrHigher": 19
	},
	{
		"fips": 5147,
		"state": "AR",
		"area_name": "Woodruff County",
		"bachelorsOrHigher": 9
	},
	{
		"fips": 5149,
		"state": "AR",
		"area_name": "Yell County",
		"bachelorsOrHigher": 11.9
	},
	{
		"fips": 6001,
		"state": "CA",
		"area_name": "Alameda County",
		"bachelorsOrHigher": 42.1
	},
	{
		"fips": 6003,
		"state": "CA",
		"area_name": "Alpine County",
		"bachelorsOrHigher": 30.5
	},
	{
		"fips": 6005,
		"state": "CA",
		"area_name": "Amador County",
		"bachelorsOrHigher": 20.5
	},
	{
		"fips": 6007,
		"state": "CA",
		"area_name": "Butte County",
		"bachelorsOrHigher": 25
	},
	{
		"fips": 6009,
		"state": "CA",
		"area_name": "Calaveras County",
		"bachelorsOrHigher": 21.1
	},
	{
		"fips": 6011,
		"state": "CA",
		"area_name": "Colusa County",
		"bachelorsOrHigher": 14.3
	},
	{
		"fips": 6013,
		"state": "CA",
		"area_name": "Contra Costa County",
		"bachelorsOrHigher": 39.4
	},
	{
		"fips": 6015,
		"state": "CA",
		"area_name": "Del Norte County",
		"bachelorsOrHigher": 16
	},
	{
		"fips": 6017,
		"state": "CA",
		"area_name": "El Dorado County",
		"bachelorsOrHigher": 32.1
	},
	{
		"fips": 6019,
		"state": "CA",
		"area_name": "Fresno County",
		"bachelorsOrHigher": 19.5
	},
	{
		"fips": 6021,
		"state": "CA",
		"area_name": "Glenn County",
		"bachelorsOrHigher": 15.7
	},
	{
		"fips": 6023,
		"state": "CA",
		"area_name": "Humboldt County",
		"bachelorsOrHigher": 27.5
	},
	{
		"fips": 6025,
		"state": "CA",
		"area_name": "Imperial County",
		"bachelorsOrHigher": 13.4
	},
	{
		"fips": 6027,
		"state": "CA",
		"area_name": "Inyo County",
		"bachelorsOrHigher": 21.4
	},
	{
		"fips": 6029,
		"state": "CA",
		"area_name": "Kern County",
		"bachelorsOrHigher": 15.2
	},
	{
		"fips": 6031,
		"state": "CA",
		"area_name": "Kings County",
		"bachelorsOrHigher": 12.5
	},
	{
		"fips": 6033,
		"state": "CA",
		"area_name": "Lake County",
		"bachelorsOrHigher": 16.2
	},
	{
		"fips": 6035,
		"state": "CA",
		"area_name": "Lassen County",
		"bachelorsOrHigher": 12.9
	},
	{
		"fips": 6037,
		"state": "CA",
		"area_name": "Los Angeles County",
		"bachelorsOrHigher": 29.9
	},
	{
		"fips": 6039,
		"state": "CA",
		"area_name": "Madera County",
		"bachelorsOrHigher": 13.5
	},
	{
		"fips": 6041,
		"state": "CA",
		"area_name": "Marin County",
		"bachelorsOrHigher": 54.8
	},
	{
		"fips": 6043,
		"state": "CA",
		"area_name": "Mariposa County",
		"bachelorsOrHigher": 22.4
	},
	{
		"fips": 6045,
		"state": "CA",
		"area_name": "Mendocino County",
		"bachelorsOrHigher": 22.5
	},
	{
		"fips": 6047,
		"state": "CA",
		"area_name": "Merced County",
		"bachelorsOrHigher": 13
	},
	{
		"fips": 6049,
		"state": "CA",
		"area_name": "Modoc County",
		"bachelorsOrHigher": 18.5
	},
	{
		"fips": 6051,
		"state": "CA",
		"area_name": "Mono County",
		"bachelorsOrHigher": 33.3
	},
	{
		"fips": 6053,
		"state": "CA",
		"area_name": "Monterey County",
		"bachelorsOrHigher": 23.1
	},
	{
		"fips": 6055,
		"state": "CA",
		"area_name": "Napa County",
		"bachelorsOrHigher": 31.9
	},
	{
		"fips": 6057,
		"state": "CA",
		"area_name": "Nevada County",
		"bachelorsOrHigher": 32.8
	},
	{
		"fips": 6059,
		"state": "CA",
		"area_name": "Orange County",
		"bachelorsOrHigher": 37.3
	},
	{
		"fips": 6061,
		"state": "CA",
		"area_name": "Placer County",
		"bachelorsOrHigher": 35.7
	},
	{
		"fips": 6063,
		"state": "CA",
		"area_name": "Plumas County",
		"bachelorsOrHigher": 22.7
	},
	{
		"fips": 6065,
		"state": "CA",
		"area_name": "Riverside County",
		"bachelorsOrHigher": 20.8
	},
	{
		"fips": 6067,
		"state": "CA",
		"area_name": "Sacramento County",
		"bachelorsOrHigher": 28.2
	},
	{
		"fips": 6069,
		"state": "CA",
		"area_name": "San Benito County",
		"bachelorsOrHigher": 19
	},
	{
		"fips": 6071,
		"state": "CA",
		"area_name": "San Bernardino County",
		"bachelorsOrHigher": 18.8
	},
	{
		"fips": 6073,
		"state": "CA",
		"area_name": "San Diego County",
		"bachelorsOrHigher": 35.1
	},
	{
		"fips": 6075,
		"state": "CA",
		"area_name": "San Francisco County",
		"bachelorsOrHigher": 52.9
	},
	{
		"fips": 6077,
		"state": "CA",
		"area_name": "San Joaquin County",
		"bachelorsOrHigher": 18.1
	},
	{
		"fips": 6079,
		"state": "CA",
		"area_name": "San Luis Obispo County",
		"bachelorsOrHigher": 32.1
	},
	{
		"fips": 6081,
		"state": "CA",
		"area_name": "San Mateo County",
		"bachelorsOrHigher": 45
	},
	{
		"fips": 6083,
		"state": "CA",
		"area_name": "Santa Barbara County",
		"bachelorsOrHigher": 31.4
	},
	{
		"fips": 6085,
		"state": "CA",
		"area_name": "Santa Clara County",
		"bachelorsOrHigher": 47.3
	},
	{
		"fips": 6087,
		"state": "CA",
		"area_name": "Santa Cruz County",
		"bachelorsOrHigher": 37.5
	},
	{
		"fips": 6089,
		"state": "CA",
		"area_name": "Shasta County",
		"bachelorsOrHigher": 19.1
	},
	{
		"fips": 6091,
		"state": "CA",
		"area_name": "Sierra County",
		"bachelorsOrHigher": 19
	},
	{
		"fips": 6093,
		"state": "CA",
		"area_name": "Siskiyou County",
		"bachelorsOrHigher": 24
	},
	{
		"fips": 6095,
		"state": "CA",
		"area_name": "Solano County",
		"bachelorsOrHigher": 24.3
	},
	{
		"fips": 6097,
		"state": "CA",
		"area_name": "Sonoma County",
		"bachelorsOrHigher": 32.6
	},
	{
		"fips": 6099,
		"state": "CA",
		"area_name": "Stanislaus County",
		"bachelorsOrHigher": 16.4
	},
	{
		"fips": 6101,
		"state": "CA",
		"area_name": "Sutter County",
		"bachelorsOrHigher": 18.5
	},
	{
		"fips": 6103,
		"state": "CA",
		"area_name": "Tehama County",
		"bachelorsOrHigher": 14.1
	},
	{
		"fips": 6105,
		"state": "CA",
		"area_name": "Trinity County",
		"bachelorsOrHigher": 22
	},
	{
		"fips": 6107,
		"state": "CA",
		"area_name": "Tulare County",
		"bachelorsOrHigher": 13.3
	},
	{
		"fips": 6109,
		"state": "CA",
		"area_name": "Tuolumne County",
		"bachelorsOrHigher": 19.8
	},
	{
		"fips": 6111,
		"state": "CA",
		"area_name": "Ventura County",
		"bachelorsOrHigher": 31.6
	},
	{
		"fips": 6113,
		"state": "CA",
		"area_name": "Yolo County",
		"bachelorsOrHigher": 38.3
	},
	{
		"fips": 6115,
		"state": "CA",
		"area_name": "Yuba County",
		"bachelorsOrHigher": 14.2
	},
	{
		"fips": 8001,
		"state": "CO",
		"area_name": "Adams County",
		"bachelorsOrHigher": 21.6
	},
	{
		"fips": 8003,
		"state": "CO",
		"area_name": "Alamosa County",
		"bachelorsOrHigher": 24.1
	},
	{
		"fips": 8005,
		"state": "CO",
		"area_name": "Arapahoe County",
		"bachelorsOrHigher": 39.4
	},
	{
		"fips": 8007,
		"state": "CO",
		"area_name": "Archuleta County",
		"bachelorsOrHigher": 35.3
	},
	{
		"fips": 8009,
		"state": "CO",
		"area_name": "Baca County",
		"bachelorsOrHigher": 16.1
	},
	{
		"fips": 8011,
		"state": "CO",
		"area_name": "Bent County",
		"bachelorsOrHigher": 7.5
	},
	{
		"fips": 8013,
		"state": "CO",
		"area_name": "Boulder County",
		"bachelorsOrHigher": 58.2
	},
	{
		"fips": 8014,
		"state": "CO",
		"area_name": "Broomfield County",
		"bachelorsOrHigher": 49.5
	},
	{
		"fips": 8015,
		"state": "CO",
		"area_name": "Chaffee County",
		"bachelorsOrHigher": 34.2
	},
	{
		"fips": 8017,
		"state": "CO",
		"area_name": "Cheyenne County",
		"bachelorsOrHigher": 21.8
	},
	{
		"fips": 8019,
		"state": "CO",
		"area_name": "Clear Creek County",
		"bachelorsOrHigher": 40.8
	},
	{
		"fips": 8021,
		"state": "CO",
		"area_name": "Conejos County",
		"bachelorsOrHigher": 20.2
	},
	{
		"fips": 8023,
		"state": "CO",
		"area_name": "Costilla County",
		"bachelorsOrHigher": 18.2
	},
	{
		"fips": 8025,
		"state": "CO",
		"area_name": "Crowley County",
		"bachelorsOrHigher": 10.5
	},
	{
		"fips": 8027,
		"state": "CO",
		"area_name": "Custer County",
		"bachelorsOrHigher": 34.8
	},
	{
		"fips": 8029,
		"state": "CO",
		"area_name": "Delta County",
		"bachelorsOrHigher": 18.9
	},
	{
		"fips": 8031,
		"state": "CO",
		"area_name": "Denver County",
		"bachelorsOrHigher": 43.7
	},
	{
		"fips": 8033,
		"state": "CO",
		"area_name": "Dolores County",
		"bachelorsOrHigher": 21.7
	},
	{
		"fips": 8035,
		"state": "CO",
		"area_name": "Douglas County",
		"bachelorsOrHigher": 55.9
	},
	{
		"fips": 8037,
		"state": "CO",
		"area_name": "Eagle County",
		"bachelorsOrHigher": 47.3
	},
	{
		"fips": 8039,
		"state": "CO",
		"area_name": "Elbert County",
		"bachelorsOrHigher": 29.5
	},
	{
		"fips": 8041,
		"state": "CO",
		"area_name": "El Paso County",
		"bachelorsOrHigher": 35.2
	},
	{
		"fips": 8043,
		"state": "CO",
		"area_name": "Fremont County",
		"bachelorsOrHigher": 15.9
	},
	{
		"fips": 8045,
		"state": "CO",
		"area_name": "Garfield County",
		"bachelorsOrHigher": 29.3
	},
	{
		"fips": 8047,
		"state": "CO",
		"area_name": "Gilpin County",
		"bachelorsOrHigher": 29.5
	},
	{
		"fips": 8049,
		"state": "CO",
		"area_name": "Grand County",
		"bachelorsOrHigher": 36.3
	},
	{
		"fips": 8051,
		"state": "CO",
		"area_name": "Gunnison County",
		"bachelorsOrHigher": 54.4
	},
	{
		"fips": 8053,
		"state": "CO",
		"area_name": "Hinsdale County",
		"bachelorsOrHigher": 41.3
	},
	{
		"fips": 8055,
		"state": "CO",
		"area_name": "Huerfano County",
		"bachelorsOrHigher": 28.9
	},
	{
		"fips": 8057,
		"state": "CO",
		"area_name": "Jackson County",
		"bachelorsOrHigher": 17.5
	},
	{
		"fips": 8059,
		"state": "CO",
		"area_name": "Jefferson County",
		"bachelorsOrHigher": 41.1
	},
	{
		"fips": 8061,
		"state": "CO",
		"area_name": "Kiowa County",
		"bachelorsOrHigher": 19.4
	},
	{
		"fips": 8063,
		"state": "CO",
		"area_name": "Kit Carson County",
		"bachelorsOrHigher": 13.9
	},
	{
		"fips": 8065,
		"state": "CO",
		"area_name": "Lake County",
		"bachelorsOrHigher": 30.3
	},
	{
		"fips": 8067,
		"state": "CO",
		"area_name": "La Plata County",
		"bachelorsOrHigher": 43.4
	},
	{
		"fips": 8069,
		"state": "CO",
		"area_name": "Larimer County",
		"bachelorsOrHigher": 44.1
	},
	{
		"fips": 8071,
		"state": "CO",
		"area_name": "Las Animas County",
		"bachelorsOrHigher": 18
	},
	{
		"fips": 8073,
		"state": "CO",
		"area_name": "Lincoln County",
		"bachelorsOrHigher": 16.1
	},
	{
		"fips": 8075,
		"state": "CO",
		"area_name": "Logan County",
		"bachelorsOrHigher": 15.9
	},
	{
		"fips": 8077,
		"state": "CO",
		"area_name": "Mesa County",
		"bachelorsOrHigher": 25.2
	},
	{
		"fips": 8079,
		"state": "CO",
		"area_name": "Mineral County",
		"bachelorsOrHigher": 39.4
	},
	{
		"fips": 8081,
		"state": "CO",
		"area_name": "Moffat County",
		"bachelorsOrHigher": 14.2
	},
	{
		"fips": 8083,
		"state": "CO",
		"area_name": "Montezuma County",
		"bachelorsOrHigher": 26.4
	},
	{
		"fips": 8085,
		"state": "CO",
		"area_name": "Montrose County",
		"bachelorsOrHigher": 24.6
	},
	{
		"fips": 8087,
		"state": "CO",
		"area_name": "Morgan County",
		"bachelorsOrHigher": 13.9
	},
	{
		"fips": 8089,
		"state": "CO",
		"area_name": "Otero County",
		"bachelorsOrHigher": 15.5
	},
	{
		"fips": 8091,
		"state": "CO",
		"area_name": "Ouray County",
		"bachelorsOrHigher": 50
	},
	{
		"fips": 8093,
		"state": "CO",
		"area_name": "Park County",
		"bachelorsOrHigher": 31.6
	},
	{
		"fips": 8095,
		"state": "CO",
		"area_name": "Phillips County",
		"bachelorsOrHigher": 18.2
	},
	{
		"fips": 8097,
		"state": "CO",
		"area_name": "Pitkin County",
		"bachelorsOrHigher": 56.4
	},
	{
		"fips": 8099,
		"state": "CO",
		"area_name": "Prowers County",
		"bachelorsOrHigher": 13.9
	},
	{
		"fips": 8101,
		"state": "CO",
		"area_name": "Pueblo County",
		"bachelorsOrHigher": 21.4
	},
	{
		"fips": 8103,
		"state": "CO",
		"area_name": "Rio Blanco County",
		"bachelorsOrHigher": 20.8
	},
	{
		"fips": 8105,
		"state": "CO",
		"area_name": "Rio Grande County",
		"bachelorsOrHigher": 20.9
	},
	{
		"fips": 8107,
		"state": "CO",
		"area_name": "Routt County",
		"bachelorsOrHigher": 48.7
	},
	{
		"fips": 8109,
		"state": "CO",
		"area_name": "Saguache County",
		"bachelorsOrHigher": 25.7
	},
	{
		"fips": 8111,
		"state": "CO",
		"area_name": "San Juan County",
		"bachelorsOrHigher": 27.1
	},
	{
		"fips": 8113,
		"state": "CO",
		"area_name": "San Miguel County",
		"bachelorsOrHigher": 54.4
	},
	{
		"fips": 8115,
		"state": "CO",
		"area_name": "Sedgwick County",
		"bachelorsOrHigher": 18.6
	},
	{
		"fips": 8117,
		"state": "CO",
		"area_name": "Summit County",
		"bachelorsOrHigher": 48.1
	},
	{
		"fips": 8119,
		"state": "CO",
		"area_name": "Teller County",
		"bachelorsOrHigher": 30.9
	},
	{
		"fips": 8121,
		"state": "CO",
		"area_name": "Washington County",
		"bachelorsOrHigher": 17.6
	},
	{
		"fips": 8123,
		"state": "CO",
		"area_name": "Weld County",
		"bachelorsOrHigher": 25.9
	},
	{
		"fips": 8125,
		"state": "CO",
		"area_name": "Yuma County",
		"bachelorsOrHigher": 18.6
	},
	{
		"fips": 9001,
		"state": "CT",
		"area_name": "Fairfield County",
		"bachelorsOrHigher": 45.4
	},
	{
		"fips": 9003,
		"state": "CT",
		"area_name": "Hartford County",
		"bachelorsOrHigher": 35.6
	},
	{
		"fips": 9005,
		"state": "CT",
		"area_name": "Litchfield County",
		"bachelorsOrHigher": 33.7
	},
	{
		"fips": 9007,
		"state": "CT",
		"area_name": "Middlesex County",
		"bachelorsOrHigher": 39.7
	},
	{
		"fips": 9009,
		"state": "CT",
		"area_name": "New Haven County",
		"bachelorsOrHigher": 33.4
	},
	{
		"fips": 9011,
		"state": "CT",
		"area_name": "New London County",
		"bachelorsOrHigher": 31.5
	},
	{
		"fips": 9013,
		"state": "CT",
		"area_name": "Tolland County",
		"bachelorsOrHigher": 36.8
	},
	{
		"fips": 9015,
		"state": "CT",
		"area_name": "Windham County",
		"bachelorsOrHigher": 22.9
	},
	{
		"fips": 10001,
		"state": "DE",
		"area_name": "Kent County",
		"bachelorsOrHigher": 22.7
	},
	{
		"fips": 10003,
		"state": "DE",
		"area_name": "New Castle County",
		"bachelorsOrHigher": 34.5
	},
	{
		"fips": 10005,
		"state": "DE",
		"area_name": "Sussex County",
		"bachelorsOrHigher": 21.9
	},
	{
		"fips": 11001,
		"state": "DC",
		"area_name": "District of Columbia",
		"bachelorsOrHigher": 53.4
	},
	{
		"fips": 12001,
		"state": "FL",
		"area_name": "Alachua County",
		"bachelorsOrHigher": 40.8
	},
	{
		"fips": 12003,
		"state": "FL",
		"area_name": "Baker County",
		"bachelorsOrHigher": 10.9
	},
	{
		"fips": 12005,
		"state": "FL",
		"area_name": "Bay County",
		"bachelorsOrHigher": 21.6
	},
	{
		"fips": 12007,
		"state": "FL",
		"area_name": "Bradford County",
		"bachelorsOrHigher": 10.4
	},
	{
		"fips": 12009,
		"state": "FL",
		"area_name": "Brevard County",
		"bachelorsOrHigher": 26.7
	},
	{
		"fips": 12011,
		"state": "FL",
		"area_name": "Broward County",
		"bachelorsOrHigher": 30.2
	},
	{
		"fips": 12013,
		"state": "FL",
		"area_name": "Calhoun County",
		"bachelorsOrHigher": 9.2
	},
	{
		"fips": 12015,
		"state": "FL",
		"area_name": "Charlotte County",
		"bachelorsOrHigher": 20.9
	},
	{
		"fips": 12017,
		"state": "FL",
		"area_name": "Citrus County",
		"bachelorsOrHigher": 16.8
	},
	{
		"fips": 12019,
		"state": "FL",
		"area_name": "Clay County",
		"bachelorsOrHigher": 23.6
	},
	{
		"fips": 12021,
		"state": "FL",
		"area_name": "Collier County",
		"bachelorsOrHigher": 32.3
	},
	{
		"fips": 12023,
		"state": "FL",
		"area_name": "Columbia County",
		"bachelorsOrHigher": 14.1
	},
	{
		"fips": 12027,
		"state": "FL",
		"area_name": "DeSoto County",
		"bachelorsOrHigher": 9.9
	},
	{
		"fips": 12029,
		"state": "FL",
		"area_name": "Dixie County",
		"bachelorsOrHigher": 7.5
	},
	{
		"fips": 12031,
		"state": "FL",
		"area_name": "Duval County",
		"bachelorsOrHigher": 26.5
	},
	{
		"fips": 12033,
		"state": "FL",
		"area_name": "Escambia County",
		"bachelorsOrHigher": 23.9
	},
	{
		"fips": 12035,
		"state": "FL",
		"area_name": "Flagler County",
		"bachelorsOrHigher": 23.4
	},
	{
		"fips": 12037,
		"state": "FL",
		"area_name": "Franklin County",
		"bachelorsOrHigher": 16
	},
	{
		"fips": 12039,
		"state": "FL",
		"area_name": "Gadsden County",
		"bachelorsOrHigher": 16.3
	},
	{
		"fips": 12041,
		"state": "FL",
		"area_name": "Gilchrist County",
		"bachelorsOrHigher": 11
	},
	{
		"fips": 12043,
		"state": "FL",
		"area_name": "Glades County",
		"bachelorsOrHigher": 10.3
	},
	{
		"fips": 12045,
		"state": "FL",
		"area_name": "Gulf County",
		"bachelorsOrHigher": 14.7
	},
	{
		"fips": 12047,
		"state": "FL",
		"area_name": "Hamilton County",
		"bachelorsOrHigher": 10.8
	},
	{
		"fips": 12049,
		"state": "FL",
		"area_name": "Hardee County",
		"bachelorsOrHigher": 10
	},
	{
		"fips": 12051,
		"state": "FL",
		"area_name": "Hendry County",
		"bachelorsOrHigher": 10.6
	},
	{
		"fips": 12053,
		"state": "FL",
		"area_name": "Hernando County",
		"bachelorsOrHigher": 15.7
	},
	{
		"fips": 12055,
		"state": "FL",
		"area_name": "Highlands County",
		"bachelorsOrHigher": 15.9
	},
	{
		"fips": 12057,
		"state": "FL",
		"area_name": "Hillsborough County",
		"bachelorsOrHigher": 29.8
	},
	{
		"fips": 12059,
		"state": "FL",
		"area_name": "Holmes County",
		"bachelorsOrHigher": 10.9
	},
	{
		"fips": 12061,
		"state": "FL",
		"area_name": "Indian River County",
		"bachelorsOrHigher": 26.7
	},
	{
		"fips": 12063,
		"state": "FL",
		"area_name": "Jackson County",
		"bachelorsOrHigher": 14.2
	},
	{
		"fips": 12065,
		"state": "FL",
		"area_name": "Jefferson County",
		"bachelorsOrHigher": 17.8
	},
	{
		"fips": 12067,
		"state": "FL",
		"area_name": "Lafayette County",
		"bachelorsOrHigher": 11.6
	},
	{
		"fips": 12069,
		"state": "FL",
		"area_name": "Lake County",
		"bachelorsOrHigher": 21
	},
	{
		"fips": 12071,
		"state": "FL",
		"area_name": "Lee County",
		"bachelorsOrHigher": 25.3
	},
	{
		"fips": 12073,
		"state": "FL",
		"area_name": "Leon County",
		"bachelorsOrHigher": 44.3
	},
	{
		"fips": 12075,
		"state": "FL",
		"area_name": "Levy County",
		"bachelorsOrHigher": 10.5
	},
	{
		"fips": 12077,
		"state": "FL",
		"area_name": "Liberty County",
		"bachelorsOrHigher": 13.1
	},
	{
		"fips": 12079,
		"state": "FL",
		"area_name": "Madison County",
		"bachelorsOrHigher": 10.4
	},
	{
		"fips": 12081,
		"state": "FL",
		"area_name": "Manatee County",
		"bachelorsOrHigher": 27.5
	},
	{
		"fips": 12083,
		"state": "FL",
		"area_name": "Marion County",
		"bachelorsOrHigher": 17.2
	},
	{
		"fips": 12085,
		"state": "FL",
		"area_name": "Martin County",
		"bachelorsOrHigher": 31.2
	},
	{
		"fips": 12086,
		"state": "FL",
		"area_name": "Miami-Dade County",
		"bachelorsOrHigher": 26.4
	},
	{
		"fips": 12087,
		"state": "FL",
		"area_name": "Monroe County",
		"bachelorsOrHigher": 29.7
	},
	{
		"fips": 12089,
		"state": "FL",
		"area_name": "Nassau County",
		"bachelorsOrHigher": 23
	},
	{
		"fips": 12091,
		"state": "FL",
		"area_name": "Okaloosa County",
		"bachelorsOrHigher": 28.1
	},
	{
		"fips": 12093,
		"state": "FL",
		"area_name": "Okeechobee County",
		"bachelorsOrHigher": 10.7
	},
	{
		"fips": 12095,
		"state": "FL",
		"area_name": "Orange County",
		"bachelorsOrHigher": 30.6
	},
	{
		"fips": 12097,
		"state": "FL",
		"area_name": "Osceola County",
		"bachelorsOrHigher": 17.8
	},
	{
		"fips": 12099,
		"state": "FL",
		"area_name": "Palm Beach County",
		"bachelorsOrHigher": 32.8
	},
	{
		"fips": 12101,
		"state": "FL",
		"area_name": "Pasco County",
		"bachelorsOrHigher": 21.1
	},
	{
		"fips": 12103,
		"state": "FL",
		"area_name": "Pinellas County",
		"bachelorsOrHigher": 28.3
	},
	{
		"fips": 12105,
		"state": "FL",
		"area_name": "Polk County",
		"bachelorsOrHigher": 18.6
	},
	{
		"fips": 12107,
		"state": "FL",
		"area_name": "Putnam County",
		"bachelorsOrHigher": 11.6
	},
	{
		"fips": 12109,
		"state": "FL",
		"area_name": "St. Johns County",
		"bachelorsOrHigher": 41.4
	},
	{
		"fips": 12111,
		"state": "FL",
		"area_name": "St. Lucie County",
		"bachelorsOrHigher": 19
	},
	{
		"fips": 12113,
		"state": "FL",
		"area_name": "Santa Rosa County",
		"bachelorsOrHigher": 26.5
	},
	{
		"fips": 12115,
		"state": "FL",
		"area_name": "Sarasota County",
		"bachelorsOrHigher": 31.1
	},
	{
		"fips": 12117,
		"state": "FL",
		"area_name": "Seminole County",
		"bachelorsOrHigher": 35
	},
	{
		"fips": 12119,
		"state": "FL",
		"area_name": "Sumter County",
		"bachelorsOrHigher": 26.4
	},
	{
		"fips": 12121,
		"state": "FL",
		"area_name": "Suwannee County",
		"bachelorsOrHigher": 11.9
	},
	{
		"fips": 12123,
		"state": "FL",
		"area_name": "Taylor County",
		"bachelorsOrHigher": 10
	},
	{
		"fips": 12125,
		"state": "FL",
		"area_name": "Union County",
		"bachelorsOrHigher": 8.6
	},
	{
		"fips": 12127,
		"state": "FL",
		"area_name": "Volusia County",
		"bachelorsOrHigher": 21.3
	},
	{
		"fips": 12129,
		"state": "FL",
		"area_name": "Wakulla County",
		"bachelorsOrHigher": 17.2
	},
	{
		"fips": 12131,
		"state": "FL",
		"area_name": "Walton County",
		"bachelorsOrHigher": 25.1
	},
	{
		"fips": 12133,
		"state": "FL",
		"area_name": "Washington County",
		"bachelorsOrHigher": 11.4
	},
	{
		"fips": 13001,
		"state": "GA",
		"area_name": "Appling County",
		"bachelorsOrHigher": 12.9
	},
	{
		"fips": 13003,
		"state": "GA",
		"area_name": "Atkinson County",
		"bachelorsOrHigher": 7.7
	},
	{
		"fips": 13005,
		"state": "GA",
		"area_name": "Bacon County",
		"bachelorsOrHigher": 12.1
	},
	{
		"fips": 13007,
		"state": "GA",
		"area_name": "Baker County",
		"bachelorsOrHigher": 11
	},
	{
		"fips": 13009,
		"state": "GA",
		"area_name": "Baldwin County",
		"bachelorsOrHigher": 18.3
	},
	{
		"fips": 13011,
		"state": "GA",
		"area_name": "Banks County",
		"bachelorsOrHigher": 11.8
	},
	{
		"fips": 13013,
		"state": "GA",
		"area_name": "Barrow County",
		"bachelorsOrHigher": 16.6
	},
	{
		"fips": 13015,
		"state": "GA",
		"area_name": "Bartow County",
		"bachelorsOrHigher": 17.3
	},
	{
		"fips": 13017,
		"state": "GA",
		"area_name": "Ben Hill County",
		"bachelorsOrHigher": 10.8
	},
	{
		"fips": 13019,
		"state": "GA",
		"area_name": "Berrien County",
		"bachelorsOrHigher": 13
	},
	{
		"fips": 13021,
		"state": "GA",
		"area_name": "Bibb County",
		"bachelorsOrHigher": 23.4
	},
	{
		"fips": 13023,
		"state": "GA",
		"area_name": "Bleckley County",
		"bachelorsOrHigher": 15.2
	},
	{
		"fips": 13025,
		"state": "GA",
		"area_name": "Brantley County",
		"bachelorsOrHigher": 6.9
	},
	{
		"fips": 13027,
		"state": "GA",
		"area_name": "Brooks County",
		"bachelorsOrHigher": 11.1
	},
	{
		"fips": 13029,
		"state": "GA",
		"area_name": "Bryan County",
		"bachelorsOrHigher": 32.4
	},
	{
		"fips": 13031,
		"state": "GA",
		"area_name": "Bulloch County",
		"bachelorsOrHigher": 28
	},
	{
		"fips": 13033,
		"state": "GA",
		"area_name": "Burke County",
		"bachelorsOrHigher": 10
	},
	{
		"fips": 13035,
		"state": "GA",
		"area_name": "Butts County",
		"bachelorsOrHigher": 9.7
	},
	{
		"fips": 13037,
		"state": "GA",
		"area_name": "Calhoun County",
		"bachelorsOrHigher": 9.4
	},
	{
		"fips": 13039,
		"state": "GA",
		"area_name": "Camden County",
		"bachelorsOrHigher": 21.2
	},
	{
		"fips": 13043,
		"state": "GA",
		"area_name": "Candler County",
		"bachelorsOrHigher": 15.1
	},
	{
		"fips": 13045,
		"state": "GA",
		"area_name": "Carroll County",
		"bachelorsOrHigher": 18.3
	},
	{
		"fips": 13047,
		"state": "GA",
		"area_name": "Catoosa County",
		"bachelorsOrHigher": 18.5
	},
	{
		"fips": 13049,
		"state": "GA",
		"area_name": "Charlton County",
		"bachelorsOrHigher": 11.4
	},
	{
		"fips": 13051,
		"state": "GA",
		"area_name": "Chatham County",
		"bachelorsOrHigher": 32.3
	},
	{
		"fips": 13053,
		"state": "GA",
		"area_name": "Chattahoochee County",
		"bachelorsOrHigher": 31.5
	},
	{
		"fips": 13055,
		"state": "GA",
		"area_name": "Chattooga County",
		"bachelorsOrHigher": 8.5
	},
	{
		"fips": 13057,
		"state": "GA",
		"area_name": "Cherokee County",
		"bachelorsOrHigher": 34.3
	},
	{
		"fips": 13059,
		"state": "GA",
		"area_name": "Clarke County",
		"bachelorsOrHigher": 39.3
	},
	{
		"fips": 13061,
		"state": "GA",
		"area_name": "Clay County",
		"bachelorsOrHigher": 6.9
	},
	{
		"fips": 13063,
		"state": "GA",
		"area_name": "Clayton County",
		"bachelorsOrHigher": 18.1
	},
	{
		"fips": 13065,
		"state": "GA",
		"area_name": "Clinch County",
		"bachelorsOrHigher": 14.1
	},
	{
		"fips": 13067,
		"state": "GA",
		"area_name": "Cobb County",
		"bachelorsOrHigher": 43.8
	},
	{
		"fips": 13069,
		"state": "GA",
		"area_name": "Coffee County",
		"bachelorsOrHigher": 12.3
	},
	{
		"fips": 13071,
		"state": "GA",
		"area_name": "Colquitt County",
		"bachelorsOrHigher": 12.9
	},
	{
		"fips": 13073,
		"state": "GA",
		"area_name": "Columbia County",
		"bachelorsOrHigher": 34.2
	},
	{
		"fips": 13075,
		"state": "GA",
		"area_name": "Cook County",
		"bachelorsOrHigher": 13.4
	},
	{
		"fips": 13077,
		"state": "GA",
		"area_name": "Coweta County",
		"bachelorsOrHigher": 26.6
	},
	{
		"fips": 13079,
		"state": "GA",
		"area_name": "Crawford County",
		"bachelorsOrHigher": 11.1
	},
	{
		"fips": 13081,
		"state": "GA",
		"area_name": "Crisp County",
		"bachelorsOrHigher": 14.7
	},
	{
		"fips": 13083,
		"state": "GA",
		"area_name": "Dade County",
		"bachelorsOrHigher": 16.2
	},
	{
		"fips": 13085,
		"state": "GA",
		"area_name": "Dawson County",
		"bachelorsOrHigher": 26.3
	},
	{
		"fips": 13087,
		"state": "GA",
		"area_name": "Decatur County",
		"bachelorsOrHigher": 15.1
	},
	{
		"fips": 13089,
		"state": "GA",
		"area_name": "DeKalb County",
		"bachelorsOrHigher": 40.3
	},
	{
		"fips": 13091,
		"state": "GA",
		"area_name": "Dodge County",
		"bachelorsOrHigher": 14.4
	},
	{
		"fips": 13093,
		"state": "GA",
		"area_name": "Dooly County",
		"bachelorsOrHigher": 9
	},
	{
		"fips": 13095,
		"state": "GA",
		"area_name": "Dougherty County",
		"bachelorsOrHigher": 17.8
	},
	{
		"fips": 13097,
		"state": "GA",
		"area_name": "Douglas County",
		"bachelorsOrHigher": 24.5
	},
	{
		"fips": 13099,
		"state": "GA",
		"area_name": "Early County",
		"bachelorsOrHigher": 14.8
	},
	{
		"fips": 13101,
		"state": "GA",
		"area_name": "Echols County",
		"bachelorsOrHigher": 7.5
	},
	{
		"fips": 13103,
		"state": "GA",
		"area_name": "Effingham County",
		"bachelorsOrHigher": 17.9
	},
	{
		"fips": 13105,
		"state": "GA",
		"area_name": "Elbert County",
		"bachelorsOrHigher": 10.7
	},
	{
		"fips": 13107,
		"state": "GA",
		"area_name": "Emanuel County",
		"bachelorsOrHigher": 10
	},
	{
		"fips": 13109,
		"state": "GA",
		"area_name": "Evans County",
		"bachelorsOrHigher": 14.5
	},
	{
		"fips": 13111,
		"state": "GA",
		"area_name": "Fannin County",
		"bachelorsOrHigher": 14.7
	},
	{
		"fips": 13113,
		"state": "GA",
		"area_name": "Fayette County",
		"bachelorsOrHigher": 43.3
	},
	{
		"fips": 13115,
		"state": "GA",
		"area_name": "Floyd County",
		"bachelorsOrHigher": 18.6
	},
	{
		"fips": 13117,
		"state": "GA",
		"area_name": "Forsyth County",
		"bachelorsOrHigher": 44.6
	},
	{
		"fips": 13119,
		"state": "GA",
		"area_name": "Franklin County",
		"bachelorsOrHigher": 12
	},
	{
		"fips": 13121,
		"state": "GA",
		"area_name": "Fulton County",
		"bachelorsOrHigher": 48.6
	},
	{
		"fips": 13123,
		"state": "GA",
		"area_name": "Gilmer County",
		"bachelorsOrHigher": 16.9
	},
	{
		"fips": 13125,
		"state": "GA",
		"area_name": "Glascock County",
		"bachelorsOrHigher": 11.4
	},
	{
		"fips": 13127,
		"state": "GA",
		"area_name": "Glynn County",
		"bachelorsOrHigher": 26.4
	},
	{
		"fips": 13129,
		"state": "GA",
		"area_name": "Gordon County",
		"bachelorsOrHigher": 13.9
	},
	{
		"fips": 13131,
		"state": "GA",
		"area_name": "Grady County",
		"bachelorsOrHigher": 12.7
	},
	{
		"fips": 13133,
		"state": "GA",
		"area_name": "Greene County",
		"bachelorsOrHigher": 24.4
	},
	{
		"fips": 13135,
		"state": "GA",
		"area_name": "Gwinnett County",
		"bachelorsOrHigher": 34.4
	},
	{
		"fips": 13137,
		"state": "GA",
		"area_name": "Habersham County",
		"bachelorsOrHigher": 16.5
	},
	{
		"fips": 13139,
		"state": "GA",
		"area_name": "Hall County",
		"bachelorsOrHigher": 22.8
	},
	{
		"fips": 13141,
		"state": "GA",
		"area_name": "Hancock County",
		"bachelorsOrHigher": 10.6
	},
	{
		"fips": 13143,
		"state": "GA",
		"area_name": "Haralson County",
		"bachelorsOrHigher": 13.8
	},
	{
		"fips": 13145,
		"state": "GA",
		"area_name": "Harris County",
		"bachelorsOrHigher": 27.8
	},
	{
		"fips": 13147,
		"state": "GA",
		"area_name": "Hart County",
		"bachelorsOrHigher": 14.6
	},
	{
		"fips": 13149,
		"state": "GA",
		"area_name": "Heard County",
		"bachelorsOrHigher": 10.4
	},
	{
		"fips": 13151,
		"state": "GA",
		"area_name": "Henry County",
		"bachelorsOrHigher": 26.2
	},
	{
		"fips": 13153,
		"state": "GA",
		"area_name": "Houston County",
		"bachelorsOrHigher": 23.2
	},
	{
		"fips": 13155,
		"state": "GA",
		"area_name": "Irwin County",
		"bachelorsOrHigher": 10.7
	},
	{
		"fips": 13157,
		"state": "GA",
		"area_name": "Jackson County",
		"bachelorsOrHigher": 18.6
	},
	{
		"fips": 13159,
		"state": "GA",
		"area_name": "Jasper County",
		"bachelorsOrHigher": 14
	},
	{
		"fips": 13161,
		"state": "GA",
		"area_name": "Jeff Davis County",
		"bachelorsOrHigher": 9
	},
	{
		"fips": 13163,
		"state": "GA",
		"area_name": "Jefferson County",
		"bachelorsOrHigher": 9.2
	},
	{
		"fips": 13165,
		"state": "GA",
		"area_name": "Jenkins County",
		"bachelorsOrHigher": 12.3
	},
	{
		"fips": 13167,
		"state": "GA",
		"area_name": "Johnson County",
		"bachelorsOrHigher": 9.6
	},
	{
		"fips": 13169,
		"state": "GA",
		"area_name": "Jones County",
		"bachelorsOrHigher": 18.5
	},
	{
		"fips": 13171,
		"state": "GA",
		"area_name": "Lamar County",
		"bachelorsOrHigher": 16.6
	},
	{
		"fips": 13173,
		"state": "GA",
		"area_name": "Lanier County",
		"bachelorsOrHigher": 12.4
	},
	{
		"fips": 13175,
		"state": "GA",
		"area_name": "Laurens County",
		"bachelorsOrHigher": 14.5
	},
	{
		"fips": 13177,
		"state": "GA",
		"area_name": "Lee County",
		"bachelorsOrHigher": 22.3
	},
	{
		"fips": 13179,
		"state": "GA",
		"area_name": "Liberty County",
		"bachelorsOrHigher": 19.5
	},
	{
		"fips": 13181,
		"state": "GA",
		"area_name": "Lincoln County",
		"bachelorsOrHigher": 10.8
	},
	{
		"fips": 13183,
		"state": "GA",
		"area_name": "Long County",
		"bachelorsOrHigher": 13.9
	},
	{
		"fips": 13185,
		"state": "GA",
		"area_name": "Lowndes County",
		"bachelorsOrHigher": 23
	},
	{
		"fips": 13187,
		"state": "GA",
		"area_name": "Lumpkin County",
		"bachelorsOrHigher": 27.5
	},
	{
		"fips": 13189,
		"state": "GA",
		"area_name": "McDuffie County",
		"bachelorsOrHigher": 15.3
	},
	{
		"fips": 13191,
		"state": "GA",
		"area_name": "McIntosh County",
		"bachelorsOrHigher": 14.2
	},
	{
		"fips": 13193,
		"state": "GA",
		"area_name": "Macon County",
		"bachelorsOrHigher": 8.7
	},
	{
		"fips": 13195,
		"state": "GA",
		"area_name": "Madison County",
		"bachelorsOrHigher": 14.8
	},
	{
		"fips": 13197,
		"state": "GA",
		"area_name": "Marion County",
		"bachelorsOrHigher": 13.4
	},
	{
		"fips": 13199,
		"state": "GA",
		"area_name": "Meriwether County",
		"bachelorsOrHigher": 9.3
	},
	{
		"fips": 13201,
		"state": "GA",
		"area_name": "Miller County",
		"bachelorsOrHigher": 12.3
	},
	{
		"fips": 13205,
		"state": "GA",
		"area_name": "Mitchell County",
		"bachelorsOrHigher": 11.1
	},
	{
		"fips": 13207,
		"state": "GA",
		"area_name": "Monroe County",
		"bachelorsOrHigher": 19.8
	},
	{
		"fips": 13209,
		"state": "GA",
		"area_name": "Montgomery County",
		"bachelorsOrHigher": 14.4
	},
	{
		"fips": 13211,
		"state": "GA",
		"area_name": "Morgan County",
		"bachelorsOrHigher": 22.3
	},
	{
		"fips": 13213,
		"state": "GA",
		"area_name": "Murray County",
		"bachelorsOrHigher": 8.6
	},
	{
		"fips": 13215,
		"state": "GA",
		"area_name": "Muscogee County",
		"bachelorsOrHigher": 23.7
	},
	{
		"fips": 13217,
		"state": "GA",
		"area_name": "Newton County",
		"bachelorsOrHigher": 19.4
	},
	{
		"fips": 13219,
		"state": "GA",
		"area_name": "Oconee County",
		"bachelorsOrHigher": 44.6
	},
	{
		"fips": 13221,
		"state": "GA",
		"area_name": "Oglethorpe County",
		"bachelorsOrHigher": 18.2
	},
	{
		"fips": 13223,
		"state": "GA",
		"area_name": "Paulding County",
		"bachelorsOrHigher": 23.3
	},
	{
		"fips": 13225,
		"state": "GA",
		"area_name": "Peach County",
		"bachelorsOrHigher": 19.5
	},
	{
		"fips": 13227,
		"state": "GA",
		"area_name": "Pickens County",
		"bachelorsOrHigher": 23.7
	},
	{
		"fips": 13229,
		"state": "GA",
		"area_name": "Pierce County",
		"bachelorsOrHigher": 12.7
	},
	{
		"fips": 13231,
		"state": "GA",
		"area_name": "Pike County",
		"bachelorsOrHigher": 17.3
	},
	{
		"fips": 13233,
		"state": "GA",
		"area_name": "Polk County",
		"bachelorsOrHigher": 12.7
	},
	{
		"fips": 13235,
		"state": "GA",
		"area_name": "Pulaski County",
		"bachelorsOrHigher": 11
	},
	{
		"fips": 13237,
		"state": "GA",
		"area_name": "Putnam County",
		"bachelorsOrHigher": 18.1
	},
	{
		"fips": 13239,
		"state": "GA",
		"area_name": "Quitman County",
		"bachelorsOrHigher": 7.2
	},
	{
		"fips": 13241,
		"state": "GA",
		"area_name": "Rabun County",
		"bachelorsOrHigher": 25.8
	},
	{
		"fips": 13243,
		"state": "GA",
		"area_name": "Randolph County",
		"bachelorsOrHigher": 14.8
	},
	{
		"fips": 13245,
		"state": "GA",
		"area_name": "Richmond County",
		"bachelorsOrHigher": 20.4
	},
	{
		"fips": 13247,
		"state": "GA",
		"area_name": "Rockdale County",
		"bachelorsOrHigher": 25.4
	},
	{
		"fips": 13249,
		"state": "GA",
		"area_name": "Schley County",
		"bachelorsOrHigher": 14.1
	},
	{
		"fips": 13251,
		"state": "GA",
		"area_name": "Screven County",
		"bachelorsOrHigher": 13
	},
	{
		"fips": 13253,
		"state": "GA",
		"area_name": "Seminole County",
		"bachelorsOrHigher": 15.1
	},
	{
		"fips": 13255,
		"state": "GA",
		"area_name": "Spalding County",
		"bachelorsOrHigher": 15.2
	},
	{
		"fips": 13257,
		"state": "GA",
		"area_name": "Stephens County",
		"bachelorsOrHigher": 15.7
	},
	{
		"fips": 13259,
		"state": "GA",
		"area_name": "Stewart County",
		"bachelorsOrHigher": 9.7
	},
	{
		"fips": 13261,
		"state": "GA",
		"area_name": "Sumter County",
		"bachelorsOrHigher": 19.4
	},
	{
		"fips": 13263,
		"state": "GA",
		"area_name": "Talbot County",
		"bachelorsOrHigher": 13.2
	},
	{
		"fips": 13265,
		"state": "GA",
		"area_name": "Taliaferro County",
		"bachelorsOrHigher": 8.3
	},
	{
		"fips": 13267,
		"state": "GA",
		"area_name": "Tattnall County",
		"bachelorsOrHigher": 11.2
	},
	{
		"fips": 13269,
		"state": "GA",
		"area_name": "Taylor County",
		"bachelorsOrHigher": 10.1
	},
	{
		"fips": 13271,
		"state": "GA",
		"area_name": "Telfair County",
		"bachelorsOrHigher": 10.8
	},
	{
		"fips": 13273,
		"state": "GA",
		"area_name": "Terrell County",
		"bachelorsOrHigher": 10.1
	},
	{
		"fips": 13275,
		"state": "GA",
		"area_name": "Thomas County",
		"bachelorsOrHigher": 17.6
	},
	{
		"fips": 13277,
		"state": "GA",
		"area_name": "Tift County",
		"bachelorsOrHigher": 16.6
	},
	{
		"fips": 13279,
		"state": "GA",
		"area_name": "Toombs County",
		"bachelorsOrHigher": 15.3
	},
	{
		"fips": 13281,
		"state": "GA",
		"area_name": "Towns County",
		"bachelorsOrHigher": 22.2
	},
	{
		"fips": 13283,
		"state": "GA",
		"area_name": "Treutlen County",
		"bachelorsOrHigher": 14.1
	},
	{
		"fips": 13285,
		"state": "GA",
		"area_name": "Troup County",
		"bachelorsOrHigher": 18.6
	},
	{
		"fips": 13287,
		"state": "GA",
		"area_name": "Turner County",
		"bachelorsOrHigher": 10.4
	},
	{
		"fips": 13289,
		"state": "GA",
		"area_name": "Twiggs County",
		"bachelorsOrHigher": 9.6
	},
	{
		"fips": 13291,
		"state": "GA",
		"area_name": "Union County",
		"bachelorsOrHigher": 20.6
	},
	{
		"fips": 13293,
		"state": "GA",
		"area_name": "Upson County",
		"bachelorsOrHigher": 11.4
	},
	{
		"fips": 13295,
		"state": "GA",
		"area_name": "Walker County",
		"bachelorsOrHigher": 14.3
	},
	{
		"fips": 13297,
		"state": "GA",
		"area_name": "Walton County",
		"bachelorsOrHigher": 17.2
	},
	{
		"fips": 13299,
		"state": "GA",
		"area_name": "Ware County",
		"bachelorsOrHigher": 13.1
	},
	{
		"fips": 13301,
		"state": "GA",
		"area_name": "Warren County",
		"bachelorsOrHigher": 8
	},
	{
		"fips": 13303,
		"state": "GA",
		"area_name": "Washington County",
		"bachelorsOrHigher": 11.3
	},
	{
		"fips": 13305,
		"state": "GA",
		"area_name": "Wayne County",
		"bachelorsOrHigher": 12.2
	},
	{
		"fips": 13307,
		"state": "GA",
		"area_name": "Webster County",
		"bachelorsOrHigher": 6
	},
	{
		"fips": 13309,
		"state": "GA",
		"area_name": "Wheeler County",
		"bachelorsOrHigher": 8.1
	},
	{
		"fips": 13311,
		"state": "GA",
		"area_name": "White County",
		"bachelorsOrHigher": 19.4
	},
	{
		"fips": 13313,
		"state": "GA",
		"area_name": "Whitfield County",
		"bachelorsOrHigher": 14.3
	},
	{
		"fips": 13315,
		"state": "GA",
		"area_name": "Wilcox County",
		"bachelorsOrHigher": 8.7
	},
	{
		"fips": 13317,
		"state": "GA",
		"area_name": "Wilkes County",
		"bachelorsOrHigher": 15.3
	},
	{
		"fips": 13319,
		"state": "GA",
		"area_name": "Wilkinson County",
		"bachelorsOrHigher": 8.2
	},
	{
		"fips": 13321,
		"state": "GA",
		"area_name": "Worth County",
		"bachelorsOrHigher": 7.8
	},
	{
		"fips": 15001,
		"state": "HI",
		"area_name": "Hawaii County",
		"bachelorsOrHigher": 25.9
	},
	{
		"fips": 15003,
		"state": "HI",
		"area_name": "Honolulu County",
		"bachelorsOrHigher": 32.5
	},
	{
		"fips": 15005,
		"state": "HI",
		"area_name": "Kalawao County",
		"bachelorsOrHigher": 43.3
	},
	{
		"fips": 15007,
		"state": "HI",
		"area_name": "Kauai County",
		"bachelorsOrHigher": 26.9
	},
	{
		"fips": 15009,
		"state": "HI",
		"area_name": "Maui County",
		"bachelorsOrHigher": 25.6
	},
	{
		"fips": 16001,
		"state": "ID",
		"area_name": "Ada County",
		"bachelorsOrHigher": 36.4
	},
	{
		"fips": 16003,
		"state": "ID",
		"area_name": "Adams County",
		"bachelorsOrHigher": 20.8
	},
	{
		"fips": 16005,
		"state": "ID",
		"area_name": "Bannock County",
		"bachelorsOrHigher": 27.3
	},
	{
		"fips": 16007,
		"state": "ID",
		"area_name": "Bear Lake County",
		"bachelorsOrHigher": 17.6
	},
	{
		"fips": 16009,
		"state": "ID",
		"area_name": "Benewah County",
		"bachelorsOrHigher": 13.3
	},
	{
		"fips": 16011,
		"state": "ID",
		"area_name": "Bingham County",
		"bachelorsOrHigher": 17.1
	},
	{
		"fips": 16013,
		"state": "ID",
		"area_name": "Blaine County",
		"bachelorsOrHigher": 44.8
	},
	{
		"fips": 16015,
		"state": "ID",
		"area_name": "Boise County",
		"bachelorsOrHigher": 24.8
	},
	{
		"fips": 16017,
		"state": "ID",
		"area_name": "Bonner County",
		"bachelorsOrHigher": 21.7
	},
	{
		"fips": 16019,
		"state": "ID",
		"area_name": "Bonneville County",
		"bachelorsOrHigher": 26.4
	},
	{
		"fips": 16021,
		"state": "ID",
		"area_name": "Boundary County",
		"bachelorsOrHigher": 14.1
	},
	{
		"fips": 16023,
		"state": "ID",
		"area_name": "Butte County",
		"bachelorsOrHigher": 15
	},
	{
		"fips": 16025,
		"state": "ID",
		"area_name": "Camas County",
		"bachelorsOrHigher": 22
	},
	{
		"fips": 16027,
		"state": "ID",
		"area_name": "Canyon County",
		"bachelorsOrHigher": 17.4
	},
	{
		"fips": 16029,
		"state": "ID",
		"area_name": "Caribou County",
		"bachelorsOrHigher": 17.8
	},
	{
		"fips": 16031,
		"state": "ID",
		"area_name": "Cassia County",
		"bachelorsOrHigher": 16.9
	},
	{
		"fips": 16033,
		"state": "ID",
		"area_name": "Clark County",
		"bachelorsOrHigher": 15.9
	},
	{
		"fips": 16035,
		"state": "ID",
		"area_name": "Clearwater County",
		"bachelorsOrHigher": 15.8
	},
	{
		"fips": 16037,
		"state": "ID",
		"area_name": "Custer County",
		"bachelorsOrHigher": 26.2
	},
	{
		"fips": 16039,
		"state": "ID",
		"area_name": "Elmore County",
		"bachelorsOrHigher": 17
	},
	{
		"fips": 16041,
		"state": "ID",
		"area_name": "Franklin County",
		"bachelorsOrHigher": 18.2
	},
	{
		"fips": 16043,
		"state": "ID",
		"area_name": "Fremont County",
		"bachelorsOrHigher": 19.7
	},
	{
		"fips": 16045,
		"state": "ID",
		"area_name": "Gem County",
		"bachelorsOrHigher": 16.9
	},
	{
		"fips": 16047,
		"state": "ID",
		"area_name": "Gooding County",
		"bachelorsOrHigher": 11.8
	},
	{
		"fips": 16049,
		"state": "ID",
		"area_name": "Idaho County",
		"bachelorsOrHigher": 16.8
	},
	{
		"fips": 16051,
		"state": "ID",
		"area_name": "Jefferson County",
		"bachelorsOrHigher": 21
	},
	{
		"fips": 16053,
		"state": "ID",
		"area_name": "Jerome County",
		"bachelorsOrHigher": 13.3
	},
	{
		"fips": 16055,
		"state": "ID",
		"area_name": "Kootenai County",
		"bachelorsOrHigher": 23.1
	},
	{
		"fips": 16057,
		"state": "ID",
		"area_name": "Latah County",
		"bachelorsOrHigher": 44
	},
	{
		"fips": 16059,
		"state": "ID",
		"area_name": "Lemhi County",
		"bachelorsOrHigher": 22.9
	},
	{
		"fips": 16061,
		"state": "ID",
		"area_name": "Lewis County",
		"bachelorsOrHigher": 16.5
	},
	{
		"fips": 16063,
		"state": "ID",
		"area_name": "Lincoln County",
		"bachelorsOrHigher": 11.3
	},
	{
		"fips": 16065,
		"state": "ID",
		"area_name": "Madison County",
		"bachelorsOrHigher": 34.4
	},
	{
		"fips": 16067,
		"state": "ID",
		"area_name": "Minidoka County",
		"bachelorsOrHigher": 11.8
	},
	{
		"fips": 16069,
		"state": "ID",
		"area_name": "Nez Perce County",
		"bachelorsOrHigher": 22.1
	},
	{
		"fips": 16071,
		"state": "ID",
		"area_name": "Oneida County",
		"bachelorsOrHigher": 12.7
	},
	{
		"fips": 16073,
		"state": "ID",
		"area_name": "Owyhee County",
		"bachelorsOrHigher": 9
	},
	{
		"fips": 16075,
		"state": "ID",
		"area_name": "Payette County",
		"bachelorsOrHigher": 15
	},
	{
		"fips": 16077,
		"state": "ID",
		"area_name": "Power County",
		"bachelorsOrHigher": 12.5
	},
	{
		"fips": 16079,
		"state": "ID",
		"area_name": "Shoshone County",
		"bachelorsOrHigher": 13.7
	},
	{
		"fips": 16081,
		"state": "ID",
		"area_name": "Teton County",
		"bachelorsOrHigher": 38.2
	},
	{
		"fips": 16083,
		"state": "ID",
		"area_name": "Twin Falls County",
		"bachelorsOrHigher": 16.9
	},
	{
		"fips": 16085,
		"state": "ID",
		"area_name": "Valley County",
		"bachelorsOrHigher": 34
	},
	{
		"fips": 16087,
		"state": "ID",
		"area_name": "Washington County",
		"bachelorsOrHigher": 14.4
	},
	{
		"fips": 17001,
		"state": "IL",
		"area_name": "Adams County",
		"bachelorsOrHigher": 20.8
	},
	{
		"fips": 17003,
		"state": "IL",
		"area_name": "Alexander County",
		"bachelorsOrHigher": 7.7
	},
	{
		"fips": 17005,
		"state": "IL",
		"area_name": "Bond County",
		"bachelorsOrHigher": 17.4
	},
	{
		"fips": 17007,
		"state": "IL",
		"area_name": "Boone County",
		"bachelorsOrHigher": 19.4
	},
	{
		"fips": 17009,
		"state": "IL",
		"area_name": "Brown County",
		"bachelorsOrHigher": 12.8
	},
	{
		"fips": 17011,
		"state": "IL",
		"area_name": "Bureau County",
		"bachelorsOrHigher": 17.5
	},
	{
		"fips": 17013,
		"state": "IL",
		"area_name": "Calhoun County",
		"bachelorsOrHigher": 14.4
	},
	{
		"fips": 17015,
		"state": "IL",
		"area_name": "Carroll County",
		"bachelorsOrHigher": 15.5
	},
	{
		"fips": 17017,
		"state": "IL",
		"area_name": "Cass County",
		"bachelorsOrHigher": 13.2
	},
	{
		"fips": 17019,
		"state": "IL",
		"area_name": "Champaign County",
		"bachelorsOrHigher": 42.5
	},
	{
		"fips": 17021,
		"state": "IL",
		"area_name": "Christian County",
		"bachelorsOrHigher": 13.9
	},
	{
		"fips": 17023,
		"state": "IL",
		"area_name": "Clark County",
		"bachelorsOrHigher": 18.4
	},
	{
		"fips": 17025,
		"state": "IL",
		"area_name": "Clay County",
		"bachelorsOrHigher": 13.5
	},
	{
		"fips": 17027,
		"state": "IL",
		"area_name": "Clinton County",
		"bachelorsOrHigher": 20.1
	},
	{
		"fips": 17029,
		"state": "IL",
		"area_name": "Coles County",
		"bachelorsOrHigher": 24
	},
	{
		"fips": 17031,
		"state": "IL",
		"area_name": "Cook County",
		"bachelorsOrHigher": 35.3
	},
	{
		"fips": 17033,
		"state": "IL",
		"area_name": "Crawford County",
		"bachelorsOrHigher": 17.7
	},
	{
		"fips": 17035,
		"state": "IL",
		"area_name": "Cumberland County",
		"bachelorsOrHigher": 13.9
	},
	{
		"fips": 17037,
		"state": "IL",
		"area_name": "DeKalb County",
		"bachelorsOrHigher": 29.9
	},
	{
		"fips": 17039,
		"state": "IL",
		"area_name": "De Witt County",
		"bachelorsOrHigher": 17.4
	},
	{
		"fips": 17041,
		"state": "IL",
		"area_name": "Douglas County",
		"bachelorsOrHigher": 17.1
	},
	{
		"fips": 17043,
		"state": "IL",
		"area_name": "DuPage County",
		"bachelorsOrHigher": 46.7
	},
	{
		"fips": 17045,
		"state": "IL",
		"area_name": "Edgar County",
		"bachelorsOrHigher": 16.9
	},
	{
		"fips": 17047,
		"state": "IL",
		"area_name": "Edwards County",
		"bachelorsOrHigher": 10.2
	},
	{
		"fips": 17049,
		"state": "IL",
		"area_name": "Effingham County",
		"bachelorsOrHigher": 20.2
	},
	{
		"fips": 17051,
		"state": "IL",
		"area_name": "Fayette County",
		"bachelorsOrHigher": 13.4
	},
	{
		"fips": 17053,
		"state": "IL",
		"area_name": "Ford County",
		"bachelorsOrHigher": 16.1
	},
	{
		"fips": 17055,
		"state": "IL",
		"area_name": "Franklin County",
		"bachelorsOrHigher": 12.7
	},
	{
		"fips": 17057,
		"state": "IL",
		"area_name": "Fulton County",
		"bachelorsOrHigher": 15.5
	},
	{
		"fips": 17059,
		"state": "IL",
		"area_name": "Gallatin County",
		"bachelorsOrHigher": 10.7
	},
	{
		"fips": 17061,
		"state": "IL",
		"area_name": "Greene County",
		"bachelorsOrHigher": 12.8
	},
	{
		"fips": 17063,
		"state": "IL",
		"area_name": "Grundy County",
		"bachelorsOrHigher": 21.4
	},
	{
		"fips": 17065,
		"state": "IL",
		"area_name": "Hamilton County",
		"bachelorsOrHigher": 14.5
	},
	{
		"fips": 17067,
		"state": "IL",
		"area_name": "Hancock County",
		"bachelorsOrHigher": 18.6
	},
	{
		"fips": 17069,
		"state": "IL",
		"area_name": "Hardin County",
		"bachelorsOrHigher": 10.8
	},
	{
		"fips": 17071,
		"state": "IL",
		"area_name": "Henderson County",
		"bachelorsOrHigher": 14.1
	},
	{
		"fips": 17073,
		"state": "IL",
		"area_name": "Henry County",
		"bachelorsOrHigher": 19.6
	},
	{
		"fips": 17075,
		"state": "IL",
		"area_name": "Iroquois County",
		"bachelorsOrHigher": 14.7
	},
	{
		"fips": 17077,
		"state": "IL",
		"area_name": "Jackson County",
		"bachelorsOrHigher": 33.8
	},
	{
		"fips": 17079,
		"state": "IL",
		"area_name": "Jasper County",
		"bachelorsOrHigher": 18.4
	},
	{
		"fips": 17081,
		"state": "IL",
		"area_name": "Jefferson County",
		"bachelorsOrHigher": 15.9
	},
	{
		"fips": 17083,
		"state": "IL",
		"area_name": "Jersey County",
		"bachelorsOrHigher": 16.2
	},
	{
		"fips": 17085,
		"state": "IL",
		"area_name": "Jo Daviess County",
		"bachelorsOrHigher": 23.5
	},
	{
		"fips": 17087,
		"state": "IL",
		"area_name": "Johnson County",
		"bachelorsOrHigher": 15.8
	},
	{
		"fips": 17089,
		"state": "IL",
		"area_name": "Kane County",
		"bachelorsOrHigher": 31.8
	},
	{
		"fips": 17091,
		"state": "IL",
		"area_name": "Kankakee County",
		"bachelorsOrHigher": 17.6
	},
	{
		"fips": 17093,
		"state": "IL",
		"area_name": "Kendall County",
		"bachelorsOrHigher": 34.3
	},
	{
		"fips": 17095,
		"state": "IL",
		"area_name": "Knox County",
		"bachelorsOrHigher": 17.6
	},
	{
		"fips": 17097,
		"state": "IL",
		"area_name": "Lake County",
		"bachelorsOrHigher": 42.7
	},
	{
		"fips": 17099,
		"state": "IL",
		"area_name": "La Salle County",
		"bachelorsOrHigher": 16.3
	},
	{
		"fips": 17101,
		"state": "IL",
		"area_name": "Lawrence County",
		"bachelorsOrHigher": 9.3
	},
	{
		"fips": 17103,
		"state": "IL",
		"area_name": "Lee County",
		"bachelorsOrHigher": 16.5
	},
	{
		"fips": 17105,
		"state": "IL",
		"area_name": "Livingston County",
		"bachelorsOrHigher": 16
	},
	{
		"fips": 17107,
		"state": "IL",
		"area_name": "Logan County",
		"bachelorsOrHigher": 16.4
	},
	{
		"fips": 17109,
		"state": "IL",
		"area_name": "McDonough County",
		"bachelorsOrHigher": 33.5
	},
	{
		"fips": 17111,
		"state": "IL",
		"area_name": "McHenry County",
		"bachelorsOrHigher": 32.2
	},
	{
		"fips": 17113,
		"state": "IL",
		"area_name": "McLean County",
		"bachelorsOrHigher": 43.4
	},
	{
		"fips": 17115,
		"state": "IL",
		"area_name": "Macon County",
		"bachelorsOrHigher": 23.1
	},
	{
		"fips": 17117,
		"state": "IL",
		"area_name": "Macoupin County",
		"bachelorsOrHigher": 17
	},
	{
		"fips": 17119,
		"state": "IL",
		"area_name": "Madison County",
		"bachelorsOrHigher": 24.8
	},
	{
		"fips": 17121,
		"state": "IL",
		"area_name": "Marion County",
		"bachelorsOrHigher": 13.8
	},
	{
		"fips": 17123,
		"state": "IL",
		"area_name": "Marshall County",
		"bachelorsOrHigher": 17.7
	},
	{
		"fips": 17125,
		"state": "IL",
		"area_name": "Mason County",
		"bachelorsOrHigher": 13.3
	},
	{
		"fips": 17127,
		"state": "IL",
		"area_name": "Massac County",
		"bachelorsOrHigher": 15.3
	},
	{
		"fips": 17129,
		"state": "IL",
		"area_name": "Menard County",
		"bachelorsOrHigher": 21.2
	},
	{
		"fips": 17131,
		"state": "IL",
		"area_name": "Mercer County",
		"bachelorsOrHigher": 15.5
	},
	{
		"fips": 17133,
		"state": "IL",
		"area_name": "Monroe County",
		"bachelorsOrHigher": 26.2
	},
	{
		"fips": 17135,
		"state": "IL",
		"area_name": "Montgomery County",
		"bachelorsOrHigher": 12.7
	},
	{
		"fips": 17137,
		"state": "IL",
		"area_name": "Morgan County",
		"bachelorsOrHigher": 22.1
	},
	{
		"fips": 17139,
		"state": "IL",
		"area_name": "Moultrie County",
		"bachelorsOrHigher": 15.5
	},
	{
		"fips": 17141,
		"state": "IL",
		"area_name": "Ogle County",
		"bachelorsOrHigher": 20
	},
	{
		"fips": 17143,
		"state": "IL",
		"area_name": "Peoria County",
		"bachelorsOrHigher": 29.3
	},
	{
		"fips": 17145,
		"state": "IL",
		"area_name": "Perry County",
		"bachelorsOrHigher": 13.3
	},
	{
		"fips": 17147,
		"state": "IL",
		"area_name": "Piatt County",
		"bachelorsOrHigher": 26.6
	},
	{
		"fips": 17149,
		"state": "IL",
		"area_name": "Pike County",
		"bachelorsOrHigher": 14.7
	},
	{
		"fips": 17151,
		"state": "IL",
		"area_name": "Pope County",
		"bachelorsOrHigher": 14.7
	},
	{
		"fips": 17153,
		"state": "IL",
		"area_name": "Pulaski County",
		"bachelorsOrHigher": 11.2
	},
	{
		"fips": 17155,
		"state": "IL",
		"area_name": "Putnam County",
		"bachelorsOrHigher": 13.7
	},
	{
		"fips": 17157,
		"state": "IL",
		"area_name": "Randolph County",
		"bachelorsOrHigher": 12.3
	},
	{
		"fips": 17159,
		"state": "IL",
		"area_name": "Richland County",
		"bachelorsOrHigher": 21.3
	},
	{
		"fips": 17161,
		"state": "IL",
		"area_name": "Rock Island County",
		"bachelorsOrHigher": 21.7
	},
	{
		"fips": 17163,
		"state": "IL",
		"area_name": "St. Clair County",
		"bachelorsOrHigher": 25.6
	},
	{
		"fips": 17165,
		"state": "IL",
		"area_name": "Saline County",
		"bachelorsOrHigher": 14
	},
	{
		"fips": 17167,
		"state": "IL",
		"area_name": "Sangamon County",
		"bachelorsOrHigher": 33
	},
	{
		"fips": 17169,
		"state": "IL",
		"area_name": "Schuyler County",
		"bachelorsOrHigher": 17.8
	},
	{
		"fips": 17171,
		"state": "IL",
		"area_name": "Scott County",
		"bachelorsOrHigher": 12.1
	},
	{
		"fips": 17173,
		"state": "IL",
		"area_name": "Shelby County",
		"bachelorsOrHigher": 14.3
	},
	{
		"fips": 17175,
		"state": "IL",
		"area_name": "Stark County",
		"bachelorsOrHigher": 17.6
	},
	{
		"fips": 17177,
		"state": "IL",
		"area_name": "Stephenson County",
		"bachelorsOrHigher": 18
	},
	{
		"fips": 17179,
		"state": "IL",
		"area_name": "Tazewell County",
		"bachelorsOrHigher": 24.6
	},
	{
		"fips": 17181,
		"state": "IL",
		"area_name": "Union County",
		"bachelorsOrHigher": 21.3
	},
	{
		"fips": 17183,
		"state": "IL",
		"area_name": "Vermilion County",
		"bachelorsOrHigher": 13.8
	},
	{
		"fips": 17185,
		"state": "IL",
		"area_name": "Wabash County",
		"bachelorsOrHigher": 17.4
	},
	{
		"fips": 17187,
		"state": "IL",
		"area_name": "Warren County",
		"bachelorsOrHigher": 20.5
	},
	{
		"fips": 17189,
		"state": "IL",
		"area_name": "Washington County",
		"bachelorsOrHigher": 21.5
	},
	{
		"fips": 17191,
		"state": "IL",
		"area_name": "Wayne County",
		"bachelorsOrHigher": 12.5
	},
	{
		"fips": 17193,
		"state": "IL",
		"area_name": "White County",
		"bachelorsOrHigher": 13.5
	},
	{
		"fips": 17195,
		"state": "IL",
		"area_name": "Whiteside County",
		"bachelorsOrHigher": 16.6
	},
	{
		"fips": 17197,
		"state": "IL",
		"area_name": "Will County",
		"bachelorsOrHigher": 32.6
	},
	{
		"fips": 17199,
		"state": "IL",
		"area_name": "Williamson County",
		"bachelorsOrHigher": 22.1
	},
	{
		"fips": 17201,
		"state": "IL",
		"area_name": "Winnebago County",
		"bachelorsOrHigher": 21.7
	},
	{
		"fips": 17203,
		"state": "IL",
		"area_name": "Woodford County",
		"bachelorsOrHigher": 27.9
	},
	{
		"fips": 18001,
		"state": "IN",
		"area_name": "Adams County",
		"bachelorsOrHigher": 14.9
	},
	{
		"fips": 18003,
		"state": "IN",
		"area_name": "Allen County",
		"bachelorsOrHigher": 26.6
	},
	{
		"fips": 18005,
		"state": "IN",
		"area_name": "Bartholomew County",
		"bachelorsOrHigher": 27.9
	},
	{
		"fips": 18007,
		"state": "IN",
		"area_name": "Benton County",
		"bachelorsOrHigher": 16.4
	},
	{
		"fips": 18009,
		"state": "IN",
		"area_name": "Blackford County",
		"bachelorsOrHigher": 10.5
	},
	{
		"fips": 18011,
		"state": "IN",
		"area_name": "Boone County",
		"bachelorsOrHigher": 42.5
	},
	{
		"fips": 18013,
		"state": "IN",
		"area_name": "Brown County",
		"bachelorsOrHigher": 21.2
	},
	{
		"fips": 18015,
		"state": "IN",
		"area_name": "Carroll County",
		"bachelorsOrHigher": 16.7
	},
	{
		"fips": 18017,
		"state": "IN",
		"area_name": "Cass County",
		"bachelorsOrHigher": 13.6
	},
	{
		"fips": 18019,
		"state": "IN",
		"area_name": "Clark County",
		"bachelorsOrHigher": 19.7
	},
	{
		"fips": 18021,
		"state": "IN",
		"area_name": "Clay County",
		"bachelorsOrHigher": 14.2
	},
	{
		"fips": 18023,
		"state": "IN",
		"area_name": "Clinton County",
		"bachelorsOrHigher": 14.3
	},
	{
		"fips": 18025,
		"state": "IN",
		"area_name": "Crawford County",
		"bachelorsOrHigher": 10.7
	},
	{
		"fips": 18027,
		"state": "IN",
		"area_name": "Daviess County",
		"bachelorsOrHigher": 12.9
	},
	{
		"fips": 18029,
		"state": "IN",
		"area_name": "Dearborn County",
		"bachelorsOrHigher": 18.2
	},
	{
		"fips": 18031,
		"state": "IN",
		"area_name": "Decatur County",
		"bachelorsOrHigher": 14.5
	},
	{
		"fips": 18033,
		"state": "IN",
		"area_name": "DeKalb County",
		"bachelorsOrHigher": 17
	},
	{
		"fips": 18035,
		"state": "IN",
		"area_name": "Delaware County",
		"bachelorsOrHigher": 23.3
	},
	{
		"fips": 18037,
		"state": "IN",
		"area_name": "Dubois County",
		"bachelorsOrHigher": 17.9
	},
	{
		"fips": 18039,
		"state": "IN",
		"area_name": "Elkhart County",
		"bachelorsOrHigher": 17.9
	},
	{
		"fips": 18041,
		"state": "IN",
		"area_name": "Fayette County",
		"bachelorsOrHigher": 10.1
	},
	{
		"fips": 18043,
		"state": "IN",
		"area_name": "Floyd County",
		"bachelorsOrHigher": 24.3
	},
	{
		"fips": 18045,
		"state": "IN",
		"area_name": "Fountain County",
		"bachelorsOrHigher": 12.5
	},
	{
		"fips": 18047,
		"state": "IN",
		"area_name": "Franklin County",
		"bachelorsOrHigher": 17.7
	},
	{
		"fips": 18049,
		"state": "IN",
		"area_name": "Fulton County",
		"bachelorsOrHigher": 12.5
	},
	{
		"fips": 18051,
		"state": "IN",
		"area_name": "Gibson County",
		"bachelorsOrHigher": 15
	},
	{
		"fips": 18053,
		"state": "IN",
		"area_name": "Grant County",
		"bachelorsOrHigher": 17.2
	},
	{
		"fips": 18055,
		"state": "IN",
		"area_name": "Greene County",
		"bachelorsOrHigher": 13.2
	},
	{
		"fips": 18057,
		"state": "IN",
		"area_name": "Hamilton County",
		"bachelorsOrHigher": 55.6
	},
	{
		"fips": 18059,
		"state": "IN",
		"area_name": "Hancock County",
		"bachelorsOrHigher": 26.7
	},
	{
		"fips": 18061,
		"state": "IN",
		"area_name": "Harrison County",
		"bachelorsOrHigher": 15.5
	},
	{
		"fips": 18063,
		"state": "IN",
		"area_name": "Hendricks County",
		"bachelorsOrHigher": 32.1
	},
	{
		"fips": 18065,
		"state": "IN",
		"area_name": "Henry County",
		"bachelorsOrHigher": 15
	},
	{
		"fips": 18067,
		"state": "IN",
		"area_name": "Howard County",
		"bachelorsOrHigher": 19.5
	},
	{
		"fips": 18069,
		"state": "IN",
		"area_name": "Huntington County",
		"bachelorsOrHigher": 18
	},
	{
		"fips": 18071,
		"state": "IN",
		"area_name": "Jackson County",
		"bachelorsOrHigher": 14.4
	},
	{
		"fips": 18073,
		"state": "IN",
		"area_name": "Jasper County",
		"bachelorsOrHigher": 15.3
	},
	{
		"fips": 18075,
		"state": "IN",
		"area_name": "Jay County",
		"bachelorsOrHigher": 10.2
	},
	{
		"fips": 18077,
		"state": "IN",
		"area_name": "Jefferson County",
		"bachelorsOrHigher": 17.2
	},
	{
		"fips": 18079,
		"state": "IN",
		"area_name": "Jennings County",
		"bachelorsOrHigher": 10.8
	},
	{
		"fips": 18081,
		"state": "IN",
		"area_name": "Johnson County",
		"bachelorsOrHigher": 27.3
	},
	{
		"fips": 18083,
		"state": "IN",
		"area_name": "Knox County",
		"bachelorsOrHigher": 14.5
	},
	{
		"fips": 18085,
		"state": "IN",
		"area_name": "Kosciusko County",
		"bachelorsOrHigher": 21.4
	},
	{
		"fips": 18087,
		"state": "IN",
		"area_name": "LaGrange County",
		"bachelorsOrHigher": 10.8
	},
	{
		"fips": 18089,
		"state": "IN",
		"area_name": "Lake County",
		"bachelorsOrHigher": 20
	},
	{
		"fips": 18091,
		"state": "IN",
		"area_name": "LaPorte County",
		"bachelorsOrHigher": 17.1
	},
	{
		"fips": 18093,
		"state": "IN",
		"area_name": "Lawrence County",
		"bachelorsOrHigher": 14.6
	},
	{
		"fips": 18095,
		"state": "IN",
		"area_name": "Madison County",
		"bachelorsOrHigher": 17.1
	},
	{
		"fips": 18097,
		"state": "IN",
		"area_name": "Marion County",
		"bachelorsOrHigher": 27.7
	},
	{
		"fips": 18099,
		"state": "IN",
		"area_name": "Marshall County",
		"bachelorsOrHigher": 17.3
	},
	{
		"fips": 18101,
		"state": "IN",
		"area_name": "Martin County",
		"bachelorsOrHigher": 11.8
	},
	{
		"fips": 18103,
		"state": "IN",
		"area_name": "Miami County",
		"bachelorsOrHigher": 10.7
	},
	{
		"fips": 18105,
		"state": "IN",
		"area_name": "Monroe County",
		"bachelorsOrHigher": 44.2
	},
	{
		"fips": 18107,
		"state": "IN",
		"area_name": "Montgomery County",
		"bachelorsOrHigher": 16.8
	},
	{
		"fips": 18109,
		"state": "IN",
		"area_name": "Morgan County",
		"bachelorsOrHigher": 15.5
	},
	{
		"fips": 18111,
		"state": "IN",
		"area_name": "Newton County",
		"bachelorsOrHigher": 9.1
	},
	{
		"fips": 18113,
		"state": "IN",
		"area_name": "Noble County",
		"bachelorsOrHigher": 14.2
	},
	{
		"fips": 18115,
		"state": "IN",
		"area_name": "Ohio County",
		"bachelorsOrHigher": 12.8
	},
	{
		"fips": 18117,
		"state": "IN",
		"area_name": "Orange County",
		"bachelorsOrHigher": 12.1
	},
	{
		"fips": 18119,
		"state": "IN",
		"area_name": "Owen County",
		"bachelorsOrHigher": 10.7
	},
	{
		"fips": 18121,
		"state": "IN",
		"area_name": "Parke County",
		"bachelorsOrHigher": 14.3
	},
	{
		"fips": 18123,
		"state": "IN",
		"area_name": "Perry County",
		"bachelorsOrHigher": 10.4
	},
	{
		"fips": 18125,
		"state": "IN",
		"area_name": "Pike County",
		"bachelorsOrHigher": 12
	},
	{
		"fips": 18127,
		"state": "IN",
		"area_name": "Porter County",
		"bachelorsOrHigher": 26.4
	},
	{
		"fips": 18129,
		"state": "IN",
		"area_name": "Posey County",
		"bachelorsOrHigher": 21.3
	},
	{
		"fips": 18131,
		"state": "IN",
		"area_name": "Pulaski County",
		"bachelorsOrHigher": 12
	},
	{
		"fips": 18133,
		"state": "IN",
		"area_name": "Putnam County",
		"bachelorsOrHigher": 15.5
	},
	{
		"fips": 18135,
		"state": "IN",
		"area_name": "Randolph County",
		"bachelorsOrHigher": 12.6
	},
	{
		"fips": 18137,
		"state": "IN",
		"area_name": "Ripley County",
		"bachelorsOrHigher": 16.8
	},
	{
		"fips": 18139,
		"state": "IN",
		"area_name": "Rush County",
		"bachelorsOrHigher": 14.7
	},
	{
		"fips": 18141,
		"state": "IN",
		"area_name": "St. Joseph County",
		"bachelorsOrHigher": 27.2
	},
	{
		"fips": 18143,
		"state": "IN",
		"area_name": "Scott County",
		"bachelorsOrHigher": 13.2
	},
	{
		"fips": 18145,
		"state": "IN",
		"area_name": "Shelby County",
		"bachelorsOrHigher": 15
	},
	{
		"fips": 18147,
		"state": "IN",
		"area_name": "Spencer County",
		"bachelorsOrHigher": 15.4
	},
	{
		"fips": 18149,
		"state": "IN",
		"area_name": "Starke County",
		"bachelorsOrHigher": 11.2
	},
	{
		"fips": 18151,
		"state": "IN",
		"area_name": "Steuben County",
		"bachelorsOrHigher": 20.1
	},
	{
		"fips": 18153,
		"state": "IN",
		"area_name": "Sullivan County",
		"bachelorsOrHigher": 13
	},
	{
		"fips": 18155,
		"state": "IN",
		"area_name": "Switzerland County",
		"bachelorsOrHigher": 8.7
	},
	{
		"fips": 18157,
		"state": "IN",
		"area_name": "Tippecanoe County",
		"bachelorsOrHigher": 35.2
	},
	{
		"fips": 18159,
		"state": "IN",
		"area_name": "Tipton County",
		"bachelorsOrHigher": 17.3
	},
	{
		"fips": 18161,
		"state": "IN",
		"area_name": "Union County",
		"bachelorsOrHigher": 19.3
	},
	{
		"fips": 18163,
		"state": "IN",
		"area_name": "Vanderburgh County",
		"bachelorsOrHigher": 23.5
	},
	{
		"fips": 18165,
		"state": "IN",
		"area_name": "Vermillion County",
		"bachelorsOrHigher": 13.2
	},
	{
		"fips": 18167,
		"state": "IN",
		"area_name": "Vigo County",
		"bachelorsOrHigher": 21.6
	},
	{
		"fips": 18169,
		"state": "IN",
		"area_name": "Wabash County",
		"bachelorsOrHigher": 17.1
	},
	{
		"fips": 18171,
		"state": "IN",
		"area_name": "Warren County",
		"bachelorsOrHigher": 17.2
	},
	{
		"fips": 18173,
		"state": "IN",
		"area_name": "Warrick County",
		"bachelorsOrHigher": 26.8
	},
	{
		"fips": 18175,
		"state": "IN",
		"area_name": "Washington County",
		"bachelorsOrHigher": 12.2
	},
	{
		"fips": 18177,
		"state": "IN",
		"area_name": "Wayne County",
		"bachelorsOrHigher": 17.7
	},
	{
		"fips": 18179,
		"state": "IN",
		"area_name": "Wells County",
		"bachelorsOrHigher": 16.6
	},
	{
		"fips": 18181,
		"state": "IN",
		"area_name": "White County",
		"bachelorsOrHigher": 15.1
	},
	{
		"fips": 18183,
		"state": "IN",
		"area_name": "Whitley County",
		"bachelorsOrHigher": 18.1
	},
	{
		"fips": 19001,
		"state": "IA",
		"area_name": "Adair County",
		"bachelorsOrHigher": 15.2
	},
	{
		"fips": 19003,
		"state": "IA",
		"area_name": "Adams County",
		"bachelorsOrHigher": 14.7
	},
	{
		"fips": 19005,
		"state": "IA",
		"area_name": "Allamakee County",
		"bachelorsOrHigher": 15.9
	},
	{
		"fips": 19007,
		"state": "IA",
		"area_name": "Appanoose County",
		"bachelorsOrHigher": 18.4
	},
	{
		"fips": 19009,
		"state": "IA",
		"area_name": "Audubon County",
		"bachelorsOrHigher": 16.4
	},
	{
		"fips": 19011,
		"state": "IA",
		"area_name": "Benton County",
		"bachelorsOrHigher": 20
	},
	{
		"fips": 19013,
		"state": "IA",
		"area_name": "Black Hawk County",
		"bachelorsOrHigher": 26.2
	},
	{
		"fips": 19015,
		"state": "IA",
		"area_name": "Boone County",
		"bachelorsOrHigher": 22.5
	},
	{
		"fips": 19017,
		"state": "IA",
		"area_name": "Bremer County",
		"bachelorsOrHigher": 28.2
	},
	{
		"fips": 19019,
		"state": "IA",
		"area_name": "Buchanan County",
		"bachelorsOrHigher": 17.3
	},
	{
		"fips": 19021,
		"state": "IA",
		"area_name": "Buena Vista County",
		"bachelorsOrHigher": 19.7
	},
	{
		"fips": 19023,
		"state": "IA",
		"area_name": "Butler County",
		"bachelorsOrHigher": 15.5
	},
	{
		"fips": 19025,
		"state": "IA",
		"area_name": "Calhoun County",
		"bachelorsOrHigher": 18.9
	},
	{
		"fips": 19027,
		"state": "IA",
		"area_name": "Carroll County",
		"bachelorsOrHigher": 18.2
	},
	{
		"fips": 19029,
		"state": "IA",
		"area_name": "Cass County",
		"bachelorsOrHigher": 20
	},
	{
		"fips": 19031,
		"state": "IA",
		"area_name": "Cedar County",
		"bachelorsOrHigher": 20.8
	},
	{
		"fips": 19033,
		"state": "IA",
		"area_name": "Cerro Gordo County",
		"bachelorsOrHigher": 22
	},
	{
		"fips": 19035,
		"state": "IA",
		"area_name": "Cherokee County",
		"bachelorsOrHigher": 20.5
	},
	{
		"fips": 19037,
		"state": "IA",
		"area_name": "Chickasaw County",
		"bachelorsOrHigher": 14.5
	},
	{
		"fips": 19039,
		"state": "IA",
		"area_name": "Clarke County",
		"bachelorsOrHigher": 15.7
	},
	{
		"fips": 19041,
		"state": "IA",
		"area_name": "Clay County",
		"bachelorsOrHigher": 18.5
	},
	{
		"fips": 19043,
		"state": "IA",
		"area_name": "Clayton County",
		"bachelorsOrHigher": 16.2
	},
	{
		"fips": 19045,
		"state": "IA",
		"area_name": "Clinton County",
		"bachelorsOrHigher": 19.2
	},
	{
		"fips": 19047,
		"state": "IA",
		"area_name": "Crawford County",
		"bachelorsOrHigher": 14.3
	},
	{
		"fips": 19049,
		"state": "IA",
		"area_name": "Dallas County",
		"bachelorsOrHigher": 43.7
	},
	{
		"fips": 19051,
		"state": "IA",
		"area_name": "Davis County",
		"bachelorsOrHigher": 16.8
	},
	{
		"fips": 19053,
		"state": "IA",
		"area_name": "Decatur County",
		"bachelorsOrHigher": 19.2
	},
	{
		"fips": 19055,
		"state": "IA",
		"area_name": "Delaware County",
		"bachelorsOrHigher": 14.9
	},
	{
		"fips": 19057,
		"state": "IA",
		"area_name": "Des Moines County",
		"bachelorsOrHigher": 20.2
	},
	{
		"fips": 19059,
		"state": "IA",
		"area_name": "Dickinson County",
		"bachelorsOrHigher": 25.2
	},
	{
		"fips": 19061,
		"state": "IA",
		"area_name": "Dubuque County",
		"bachelorsOrHigher": 27.8
	},
	{
		"fips": 19063,
		"state": "IA",
		"area_name": "Emmet County",
		"bachelorsOrHigher": 14.8
	},
	{
		"fips": 19065,
		"state": "IA",
		"area_name": "Fayette County",
		"bachelorsOrHigher": 18.4
	},
	{
		"fips": 19067,
		"state": "IA",
		"area_name": "Floyd County",
		"bachelorsOrHigher": 17
	},
	{
		"fips": 19069,
		"state": "IA",
		"area_name": "Franklin County",
		"bachelorsOrHigher": 16.3
	},
	{
		"fips": 19071,
		"state": "IA",
		"area_name": "Fremont County",
		"bachelorsOrHigher": 20.9
	},
	{
		"fips": 19073,
		"state": "IA",
		"area_name": "Greene County",
		"bachelorsOrHigher": 17.3
	},
	{
		"fips": 19075,
		"state": "IA",
		"area_name": "Grundy County",
		"bachelorsOrHigher": 20.5
	},
	{
		"fips": 19077,
		"state": "IA",
		"area_name": "Guthrie County",
		"bachelorsOrHigher": 18
	},
	{
		"fips": 19079,
		"state": "IA",
		"area_name": "Hamilton County",
		"bachelorsOrHigher": 19
	},
	{
		"fips": 19081,
		"state": "IA",
		"area_name": "Hancock County",
		"bachelorsOrHigher": 17.9
	},
	{
		"fips": 19083,
		"state": "IA",
		"area_name": "Hardin County",
		"bachelorsOrHigher": 19
	},
	{
		"fips": 19085,
		"state": "IA",
		"area_name": "Harrison County",
		"bachelorsOrHigher": 18.3
	},
	{
		"fips": 19087,
		"state": "IA",
		"area_name": "Henry County",
		"bachelorsOrHigher": 20.5
	},
	{
		"fips": 19089,
		"state": "IA",
		"area_name": "Howard County",
		"bachelorsOrHigher": 11.7
	},
	{
		"fips": 19091,
		"state": "IA",
		"area_name": "Humboldt County",
		"bachelorsOrHigher": 16.6
	},
	{
		"fips": 19093,
		"state": "IA",
		"area_name": "Ida County",
		"bachelorsOrHigher": 18.8
	},
	{
		"fips": 19095,
		"state": "IA",
		"area_name": "Iowa County",
		"bachelorsOrHigher": 21.7
	},
	{
		"fips": 19097,
		"state": "IA",
		"area_name": "Jackson County",
		"bachelorsOrHigher": 14.1
	},
	{
		"fips": 19099,
		"state": "IA",
		"area_name": "Jasper County",
		"bachelorsOrHigher": 17.7
	},
	{
		"fips": 19101,
		"state": "IA",
		"area_name": "Jefferson County",
		"bachelorsOrHigher": 33
	},
	{
		"fips": 19103,
		"state": "IA",
		"area_name": "Johnson County",
		"bachelorsOrHigher": 51.7
	},
	{
		"fips": 19105,
		"state": "IA",
		"area_name": "Jones County",
		"bachelorsOrHigher": 15.7
	},
	{
		"fips": 19107,
		"state": "IA",
		"area_name": "Keokuk County",
		"bachelorsOrHigher": 15.3
	},
	{
		"fips": 19109,
		"state": "IA",
		"area_name": "Kossuth County",
		"bachelorsOrHigher": 19.4
	},
	{
		"fips": 19111,
		"state": "IA",
		"area_name": "Lee County",
		"bachelorsOrHigher": 15.5
	},
	{
		"fips": 19113,
		"state": "IA",
		"area_name": "Linn County",
		"bachelorsOrHigher": 31.7
	},
	{
		"fips": 19115,
		"state": "IA",
		"area_name": "Louisa County",
		"bachelorsOrHigher": 14.2
	},
	{
		"fips": 19117,
		"state": "IA",
		"area_name": "Lucas County",
		"bachelorsOrHigher": 12.7
	},
	{
		"fips": 19119,
		"state": "IA",
		"area_name": "Lyon County",
		"bachelorsOrHigher": 19.6
	},
	{
		"fips": 19121,
		"state": "IA",
		"area_name": "Madison County",
		"bachelorsOrHigher": 21.7
	},
	{
		"fips": 19123,
		"state": "IA",
		"area_name": "Mahaska County",
		"bachelorsOrHigher": 22.4
	},
	{
		"fips": 19125,
		"state": "IA",
		"area_name": "Marion County",
		"bachelorsOrHigher": 24
	},
	{
		"fips": 19127,
		"state": "IA",
		"area_name": "Marshall County",
		"bachelorsOrHigher": 20.1
	},
	{
		"fips": 19129,
		"state": "IA",
		"area_name": "Mills County",
		"bachelorsOrHigher": 24.4
	},
	{
		"fips": 19131,
		"state": "IA",
		"area_name": "Mitchell County",
		"bachelorsOrHigher": 15.1
	},
	{
		"fips": 19133,
		"state": "IA",
		"area_name": "Monona County",
		"bachelorsOrHigher": 14
	},
	{
		"fips": 19135,
		"state": "IA",
		"area_name": "Monroe County",
		"bachelorsOrHigher": 17.3
	},
	{
		"fips": 19137,
		"state": "IA",
		"area_name": "Montgomery County",
		"bachelorsOrHigher": 15.4
	},
	{
		"fips": 19139,
		"state": "IA",
		"area_name": "Muscatine County",
		"bachelorsOrHigher": 18.2
	},
	{
		"fips": 19141,
		"state": "IA",
		"area_name": "O'Brien County",
		"bachelorsOrHigher": 19.5
	},
	{
		"fips": 19143,
		"state": "IA",
		"area_name": "Osceola County",
		"bachelorsOrHigher": 14.4
	},
	{
		"fips": 19145,
		"state": "IA",
		"area_name": "Page County",
		"bachelorsOrHigher": 18.3
	},
	{
		"fips": 19147,
		"state": "IA",
		"area_name": "Palo Alto County",
		"bachelorsOrHigher": 18.3
	},
	{
		"fips": 19149,
		"state": "IA",
		"area_name": "Plymouth County",
		"bachelorsOrHigher": 20
	},
	{
		"fips": 19151,
		"state": "IA",
		"area_name": "Pocahontas County",
		"bachelorsOrHigher": 18.2
	},
	{
		"fips": 19153,
		"state": "IA",
		"area_name": "Polk County",
		"bachelorsOrHigher": 35.4
	},
	{
		"fips": 19155,
		"state": "IA",
		"area_name": "Pottawattamie County",
		"bachelorsOrHigher": 19.7
	},
	{
		"fips": 19157,
		"state": "IA",
		"area_name": "Poweshiek County",
		"bachelorsOrHigher": 25.4
	},
	{
		"fips": 19159,
		"state": "IA",
		"area_name": "Ringgold County",
		"bachelorsOrHigher": 18.9
	},
	{
		"fips": 19161,
		"state": "IA",
		"area_name": "Sac County",
		"bachelorsOrHigher": 19.4
	},
	{
		"fips": 19163,
		"state": "IA",
		"area_name": "Scott County",
		"bachelorsOrHigher": 31.9
	},
	{
		"fips": 19165,
		"state": "IA",
		"area_name": "Shelby County",
		"bachelorsOrHigher": 19.7
	},
	{
		"fips": 19167,
		"state": "IA",
		"area_name": "Sioux County",
		"bachelorsOrHigher": 24.9
	},
	{
		"fips": 19169,
		"state": "IA",
		"area_name": "Story County",
		"bachelorsOrHigher": 48.5
	},
	{
		"fips": 19171,
		"state": "IA",
		"area_name": "Tama County",
		"bachelorsOrHigher": 16.2
	},
	{
		"fips": 19173,
		"state": "IA",
		"area_name": "Taylor County",
		"bachelorsOrHigher": 15.3
	},
	{
		"fips": 19175,
		"state": "IA",
		"area_name": "Union County",
		"bachelorsOrHigher": 16.6
	},
	{
		"fips": 19177,
		"state": "IA",
		"area_name": "Van Buren County",
		"bachelorsOrHigher": 14
	},
	{
		"fips": 19179,
		"state": "IA",
		"area_name": "Wapello County",
		"bachelorsOrHigher": 15.3
	},
	{
		"fips": 19181,
		"state": "IA",
		"area_name": "Warren County",
		"bachelorsOrHigher": 28.5
	},
	{
		"fips": 19183,
		"state": "IA",
		"area_name": "Washington County",
		"bachelorsOrHigher": 21.5
	},
	{
		"fips": 19185,
		"state": "IA",
		"area_name": "Wayne County",
		"bachelorsOrHigher": 13.8
	},
	{
		"fips": 19187,
		"state": "IA",
		"area_name": "Webster County",
		"bachelorsOrHigher": 19.1
	},
	{
		"fips": 19189,
		"state": "IA",
		"area_name": "Winnebago County",
		"bachelorsOrHigher": 21.3
	},
	{
		"fips": 19191,
		"state": "IA",
		"area_name": "Winneshiek County",
		"bachelorsOrHigher": 26.8
	},
	{
		"fips": 19193,
		"state": "IA",
		"area_name": "Woodbury County",
		"bachelorsOrHigher": 21.3
	},
	{
		"fips": 19195,
		"state": "IA",
		"area_name": "Worth County",
		"bachelorsOrHigher": 15.7
	},
	{
		"fips": 19197,
		"state": "IA",
		"area_name": "Wright County",
		"bachelorsOrHigher": 17.3
	},
	{
		"fips": 20001,
		"state": "KS",
		"area_name": "Allen County",
		"bachelorsOrHigher": 16.1
	},
	{
		"fips": 20003,
		"state": "KS",
		"area_name": "Anderson County",
		"bachelorsOrHigher": 17.5
	},
	{
		"fips": 20005,
		"state": "KS",
		"area_name": "Atchison County",
		"bachelorsOrHigher": 19
	},
	{
		"fips": 20007,
		"state": "KS",
		"area_name": "Barber County",
		"bachelorsOrHigher": 18.1
	},
	{
		"fips": 20009,
		"state": "KS",
		"area_name": "Barton County",
		"bachelorsOrHigher": 17.3
	},
	{
		"fips": 20011,
		"state": "KS",
		"area_name": "Bourbon County",
		"bachelorsOrHigher": 21.4
	},
	{
		"fips": 20013,
		"state": "KS",
		"area_name": "Brown County",
		"bachelorsOrHigher": 19.6
	},
	{
		"fips": 20015,
		"state": "KS",
		"area_name": "Butler County",
		"bachelorsOrHigher": 27.5
	},
	{
		"fips": 20017,
		"state": "KS",
		"area_name": "Chase County",
		"bachelorsOrHigher": 24.7
	},
	{
		"fips": 20019,
		"state": "KS",
		"area_name": "Chautauqua County",
		"bachelorsOrHigher": 17.7
	},
	{
		"fips": 20021,
		"state": "KS",
		"area_name": "Cherokee County",
		"bachelorsOrHigher": 16.1
	},
	{
		"fips": 20023,
		"state": "KS",
		"area_name": "Cheyenne County",
		"bachelorsOrHigher": 18.7
	},
	{
		"fips": 20025,
		"state": "KS",
		"area_name": "Clark County",
		"bachelorsOrHigher": 30.7
	},
	{
		"fips": 20027,
		"state": "KS",
		"area_name": "Clay County",
		"bachelorsOrHigher": 22.3
	},
	{
		"fips": 20029,
		"state": "KS",
		"area_name": "Cloud County",
		"bachelorsOrHigher": 17.2
	},
	{
		"fips": 20031,
		"state": "KS",
		"area_name": "Coffey County",
		"bachelorsOrHigher": 19.7
	},
	{
		"fips": 20033,
		"state": "KS",
		"area_name": "Comanche County",
		"bachelorsOrHigher": 26
	},
	{
		"fips": 20035,
		"state": "KS",
		"area_name": "Cowley County",
		"bachelorsOrHigher": 19.4
	},
	{
		"fips": 20037,
		"state": "KS",
		"area_name": "Crawford County",
		"bachelorsOrHigher": 28.9
	},
	{
		"fips": 20039,
		"state": "KS",
		"area_name": "Decatur County",
		"bachelorsOrHigher": 23.3
	},
	{
		"fips": 20041,
		"state": "KS",
		"area_name": "Dickinson County",
		"bachelorsOrHigher": 18.7
	},
	{
		"fips": 20043,
		"state": "KS",
		"area_name": "Doniphan County",
		"bachelorsOrHigher": 17.6
	},
	{
		"fips": 20045,
		"state": "KS",
		"area_name": "Douglas County",
		"bachelorsOrHigher": 49.4
	},
	{
		"fips": 20047,
		"state": "KS",
		"area_name": "Edwards County",
		"bachelorsOrHigher": 21.7
	},
	{
		"fips": 20049,
		"state": "KS",
		"area_name": "Elk County",
		"bachelorsOrHigher": 18.9
	},
	{
		"fips": 20051,
		"state": "KS",
		"area_name": "Ellis County",
		"bachelorsOrHigher": 32.3
	},
	{
		"fips": 20053,
		"state": "KS",
		"area_name": "Ellsworth County",
		"bachelorsOrHigher": 21.1
	},
	{
		"fips": 20055,
		"state": "KS",
		"area_name": "Finney County",
		"bachelorsOrHigher": 18.6
	},
	{
		"fips": 20057,
		"state": "KS",
		"area_name": "Ford County",
		"bachelorsOrHigher": 17
	},
	{
		"fips": 20059,
		"state": "KS",
		"area_name": "Franklin County",
		"bachelorsOrHigher": 21
	},
	{
		"fips": 20061,
		"state": "KS",
		"area_name": "Geary County",
		"bachelorsOrHigher": 19.7
	},
	{
		"fips": 20063,
		"state": "KS",
		"area_name": "Gove County",
		"bachelorsOrHigher": 21.7
	},
	{
		"fips": 20065,
		"state": "KS",
		"area_name": "Graham County",
		"bachelorsOrHigher": 25.6
	},
	{
		"fips": 20067,
		"state": "KS",
		"area_name": "Grant County",
		"bachelorsOrHigher": 18.5
	},
	{
		"fips": 20069,
		"state": "KS",
		"area_name": "Gray County",
		"bachelorsOrHigher": 20.2
	},
	{
		"fips": 20071,
		"state": "KS",
		"area_name": "Greeley County",
		"bachelorsOrHigher": 20
	},
	{
		"fips": 20073,
		"state": "KS",
		"area_name": "Greenwood County",
		"bachelorsOrHigher": 15.4
	},
	{
		"fips": 20075,
		"state": "KS",
		"area_name": "Hamilton County",
		"bachelorsOrHigher": 13.1
	},
	{
		"fips": 20077,
		"state": "KS",
		"area_name": "Harper County",
		"bachelorsOrHigher": 19.1
	},
	{
		"fips": 20079,
		"state": "KS",
		"area_name": "Harvey County",
		"bachelorsOrHigher": 25.8
	},
	{
		"fips": 20081,
		"state": "KS",
		"area_name": "Haskell County",
		"bachelorsOrHigher": 17.6
	},
	{
		"fips": 20083,
		"state": "KS",
		"area_name": "Hodgeman County",
		"bachelorsOrHigher": 21
	},
	{
		"fips": 20085,
		"state": "KS",
		"area_name": "Jackson County",
		"bachelorsOrHigher": 18.1
	},
	{
		"fips": 20087,
		"state": "KS",
		"area_name": "Jefferson County",
		"bachelorsOrHigher": 21
	},
	{
		"fips": 20089,
		"state": "KS",
		"area_name": "Jewell County",
		"bachelorsOrHigher": 14.1
	},
	{
		"fips": 20091,
		"state": "KS",
		"area_name": "Johnson County",
		"bachelorsOrHigher": 52.1
	},
	{
		"fips": 20093,
		"state": "KS",
		"area_name": "Kearny County",
		"bachelorsOrHigher": 17.8
	},
	{
		"fips": 20095,
		"state": "KS",
		"area_name": "Kingman County",
		"bachelorsOrHigher": 18.9
	},
	{
		"fips": 20097,
		"state": "KS",
		"area_name": "Kiowa County",
		"bachelorsOrHigher": 22.6
	},
	{
		"fips": 20099,
		"state": "KS",
		"area_name": "Labette County",
		"bachelorsOrHigher": 20.1
	},
	{
		"fips": 20101,
		"state": "KS",
		"area_name": "Lane County",
		"bachelorsOrHigher": 24
	},
	{
		"fips": 20103,
		"state": "KS",
		"area_name": "Leavenworth County",
		"bachelorsOrHigher": 29.8
	},
	{
		"fips": 20105,
		"state": "KS",
		"area_name": "Lincoln County",
		"bachelorsOrHigher": 21.1
	},
	{
		"fips": 20107,
		"state": "KS",
		"area_name": "Linn County",
		"bachelorsOrHigher": 14.3
	},
	{
		"fips": 20109,
		"state": "KS",
		"area_name": "Logan County",
		"bachelorsOrHigher": 18.5
	},
	{
		"fips": 20111,
		"state": "KS",
		"area_name": "Lyon County",
		"bachelorsOrHigher": 25
	},
	{
		"fips": 20113,
		"state": "KS",
		"area_name": "McPherson County",
		"bachelorsOrHigher": 26.7
	},
	{
		"fips": 20115,
		"state": "KS",
		"area_name": "Marion County",
		"bachelorsOrHigher": 22.6
	},
	{
		"fips": 20117,
		"state": "KS",
		"area_name": "Marshall County",
		"bachelorsOrHigher": 15.7
	},
	{
		"fips": 20119,
		"state": "KS",
		"area_name": "Meade County",
		"bachelorsOrHigher": 22
	},
	{
		"fips": 20121,
		"state": "KS",
		"area_name": "Miami County",
		"bachelorsOrHigher": 23.2
	},
	{
		"fips": 20123,
		"state": "KS",
		"area_name": "Mitchell County",
		"bachelorsOrHigher": 22.1
	},
	{
		"fips": 20125,
		"state": "KS",
		"area_name": "Montgomery County",
		"bachelorsOrHigher": 16.4
	},
	{
		"fips": 20127,
		"state": "KS",
		"area_name": "Morris County",
		"bachelorsOrHigher": 16.9
	},
	{
		"fips": 20129,
		"state": "KS",
		"area_name": "Morton County",
		"bachelorsOrHigher": 17
	},
	{
		"fips": 20131,
		"state": "KS",
		"area_name": "Nemaha County",
		"bachelorsOrHigher": 21.9
	},
	{
		"fips": 20133,
		"state": "KS",
		"area_name": "Neosho County",
		"bachelorsOrHigher": 18.4
	},
	{
		"fips": 20135,
		"state": "KS",
		"area_name": "Ness County",
		"bachelorsOrHigher": 19.1
	},
	{
		"fips": 20137,
		"state": "KS",
		"area_name": "Norton County",
		"bachelorsOrHigher": 16
	},
	{
		"fips": 20139,
		"state": "KS",
		"area_name": "Osage County",
		"bachelorsOrHigher": 20.7
	},
	{
		"fips": 20141,
		"state": "KS",
		"area_name": "Osborne County",
		"bachelorsOrHigher": 19.7
	},
	{
		"fips": 20143,
		"state": "KS",
		"area_name": "Ottawa County",
		"bachelorsOrHigher": 19.9
	},
	{
		"fips": 20145,
		"state": "KS",
		"area_name": "Pawnee County",
		"bachelorsOrHigher": 22.4
	},
	{
		"fips": 20147,
		"state": "KS",
		"area_name": "Phillips County",
		"bachelorsOrHigher": 20.4
	},
	{
		"fips": 20149,
		"state": "KS",
		"area_name": "Pottawatomie County",
		"bachelorsOrHigher": 32.2
	},
	{
		"fips": 20151,
		"state": "KS",
		"area_name": "Pratt County",
		"bachelorsOrHigher": 24.4
	},
	{
		"fips": 20153,
		"state": "KS",
		"area_name": "Rawlins County",
		"bachelorsOrHigher": 23.8
	},
	{
		"fips": 20155,
		"state": "KS",
		"area_name": "Reno County",
		"bachelorsOrHigher": 19.7
	},
	{
		"fips": 20157,
		"state": "KS",
		"area_name": "Republic County",
		"bachelorsOrHigher": 21
	},
	{
		"fips": 20159,
		"state": "KS",
		"area_name": "Rice County",
		"bachelorsOrHigher": 21.4
	},
	{
		"fips": 20161,
		"state": "KS",
		"area_name": "Riley County",
		"bachelorsOrHigher": 45.5
	},
	{
		"fips": 20163,
		"state": "KS",
		"area_name": "Rooks County",
		"bachelorsOrHigher": 21.6
	},
	{
		"fips": 20165,
		"state": "KS",
		"area_name": "Rush County",
		"bachelorsOrHigher": 20.8
	},
	{
		"fips": 20167,
		"state": "KS",
		"area_name": "Russell County",
		"bachelorsOrHigher": 23.9
	},
	{
		"fips": 20169,
		"state": "KS",
		"area_name": "Saline County",
		"bachelorsOrHigher": 24.5
	},
	{
		"fips": 20171,
		"state": "KS",
		"area_name": "Scott County",
		"bachelorsOrHigher": 20
	},
	{
		"fips": 20173,
		"state": "KS",
		"area_name": "Sedgwick County",
		"bachelorsOrHigher": 29.4
	},
	{
		"fips": 20175,
		"state": "KS",
		"area_name": "Seward County",
		"bachelorsOrHigher": 12.6
	},
	{
		"fips": 20177,
		"state": "KS",
		"area_name": "Shawnee County",
		"bachelorsOrHigher": 28.9
	},
	{
		"fips": 20179,
		"state": "KS",
		"area_name": "Sheridan County",
		"bachelorsOrHigher": 21.4
	},
	{
		"fips": 20181,
		"state": "KS",
		"area_name": "Sherman County",
		"bachelorsOrHigher": 15.2
	},
	{
		"fips": 20183,
		"state": "KS",
		"area_name": "Smith County",
		"bachelorsOrHigher": 18.9
	},
	{
		"fips": 20185,
		"state": "KS",
		"area_name": "Stafford County",
		"bachelorsOrHigher": 20.3
	},
	{
		"fips": 20187,
		"state": "KS",
		"area_name": "Stanton County",
		"bachelorsOrHigher": 17.9
	},
	{
		"fips": 20189,
		"state": "KS",
		"area_name": "Stevens County",
		"bachelorsOrHigher": 16.3
	},
	{
		"fips": 20191,
		"state": "KS",
		"area_name": "Sumner County",
		"bachelorsOrHigher": 18.4
	},
	{
		"fips": 20193,
		"state": "KS",
		"area_name": "Thomas County",
		"bachelorsOrHigher": 30.5
	},
	{
		"fips": 20195,
		"state": "KS",
		"area_name": "Trego County",
		"bachelorsOrHigher": 23.2
	},
	{
		"fips": 20197,
		"state": "KS",
		"area_name": "Wabaunsee County",
		"bachelorsOrHigher": 22.3
	},
	{
		"fips": 20199,
		"state": "KS",
		"area_name": "Wallace County",
		"bachelorsOrHigher": 21.2
	},
	{
		"fips": 20201,
		"state": "KS",
		"area_name": "Washington County",
		"bachelorsOrHigher": 15.5
	},
	{
		"fips": 20203,
		"state": "KS",
		"area_name": "Wichita County",
		"bachelorsOrHigher": 18.9
	},
	{
		"fips": 20205,
		"state": "KS",
		"area_name": "Wilson County",
		"bachelorsOrHigher": 12.5
	},
	{
		"fips": 20207,
		"state": "KS",
		"area_name": "Woodson County",
		"bachelorsOrHigher": 18.4
	},
	{
		"fips": 20209,
		"state": "KS",
		"area_name": "Wyandotte County",
		"bachelorsOrHigher": 15.8
	},
	{
		"fips": 21001,
		"state": "KY",
		"area_name": "Adair County",
		"bachelorsOrHigher": 15.6
	},
	{
		"fips": 21003,
		"state": "KY",
		"area_name": "Allen County",
		"bachelorsOrHigher": 13.3
	},
	{
		"fips": 21005,
		"state": "KY",
		"area_name": "Anderson County",
		"bachelorsOrHigher": 18.4
	},
	{
		"fips": 21007,
		"state": "KY",
		"area_name": "Ballard County",
		"bachelorsOrHigher": 12.4
	},
	{
		"fips": 21009,
		"state": "KY",
		"area_name": "Barren County",
		"bachelorsOrHigher": 14.7
	},
	{
		"fips": 21011,
		"state": "KY",
		"area_name": "Bath County",
		"bachelorsOrHigher": 11.5
	},
	{
		"fips": 21013,
		"state": "KY",
		"area_name": "Bell County",
		"bachelorsOrHigher": 10.2
	},
	{
		"fips": 21015,
		"state": "KY",
		"area_name": "Boone County",
		"bachelorsOrHigher": 30.8
	},
	{
		"fips": 21017,
		"state": "KY",
		"area_name": "Bourbon County",
		"bachelorsOrHigher": 15.7
	},
	{
		"fips": 21019,
		"state": "KY",
		"area_name": "Boyd County",
		"bachelorsOrHigher": 16.7
	},
	{
		"fips": 21021,
		"state": "KY",
		"area_name": "Boyle County",
		"bachelorsOrHigher": 22.2
	},
	{
		"fips": 21023,
		"state": "KY",
		"area_name": "Bracken County",
		"bachelorsOrHigher": 14.6
	},
	{
		"fips": 21025,
		"state": "KY",
		"area_name": "Breathitt County",
		"bachelorsOrHigher": 11.5
	},
	{
		"fips": 21027,
		"state": "KY",
		"area_name": "Breckinridge County",
		"bachelorsOrHigher": 9.4
	},
	{
		"fips": 21029,
		"state": "KY",
		"area_name": "Bullitt County",
		"bachelorsOrHigher": 13.4
	},
	{
		"fips": 21031,
		"state": "KY",
		"area_name": "Butler County",
		"bachelorsOrHigher": 8.7
	},
	{
		"fips": 21033,
		"state": "KY",
		"area_name": "Caldwell County",
		"bachelorsOrHigher": 17.3
	},
	{
		"fips": 21035,
		"state": "KY",
		"area_name": "Calloway County",
		"bachelorsOrHigher": 27.5
	},
	{
		"fips": 21037,
		"state": "KY",
		"area_name": "Campbell County",
		"bachelorsOrHigher": 28.1
	},
	{
		"fips": 21039,
		"state": "KY",
		"area_name": "Carlisle County",
		"bachelorsOrHigher": 13.1
	},
	{
		"fips": 21041,
		"state": "KY",
		"area_name": "Carroll County",
		"bachelorsOrHigher": 11.1
	},
	{
		"fips": 21043,
		"state": "KY",
		"area_name": "Carter County",
		"bachelorsOrHigher": 11.1
	},
	{
		"fips": 21045,
		"state": "KY",
		"area_name": "Casey County",
		"bachelorsOrHigher": 9.3
	},
	{
		"fips": 21047,
		"state": "KY",
		"area_name": "Christian County",
		"bachelorsOrHigher": 15.7
	},
	{
		"fips": 21049,
		"state": "KY",
		"area_name": "Clark County",
		"bachelorsOrHigher": 19.9
	},
	{
		"fips": 21051,
		"state": "KY",
		"area_name": "Clay County",
		"bachelorsOrHigher": 9.5
	},
	{
		"fips": 21053,
		"state": "KY",
		"area_name": "Clinton County",
		"bachelorsOrHigher": 9
	},
	{
		"fips": 21055,
		"state": "KY",
		"area_name": "Crittenden County",
		"bachelorsOrHigher": 11.3
	},
	{
		"fips": 21057,
		"state": "KY",
		"area_name": "Cumberland County",
		"bachelorsOrHigher": 12.2
	},
	{
		"fips": 21059,
		"state": "KY",
		"area_name": "Daviess County",
		"bachelorsOrHigher": 19.9
	},
	{
		"fips": 21061,
		"state": "KY",
		"area_name": "Edmonson County",
		"bachelorsOrHigher": 11.6
	},
	{
		"fips": 21063,
		"state": "KY",
		"area_name": "Elliott County",
		"bachelorsOrHigher": 6.4
	},
	{
		"fips": 21065,
		"state": "KY",
		"area_name": "Estill County",
		"bachelorsOrHigher": 8.4
	},
	{
		"fips": 21067,
		"state": "KY",
		"area_name": "Fayette County",
		"bachelorsOrHigher": 40.2
	},
	{
		"fips": 21069,
		"state": "KY",
		"area_name": "Fleming County",
		"bachelorsOrHigher": 10.9
	},
	{
		"fips": 21071,
		"state": "KY",
		"area_name": "Floyd County",
		"bachelorsOrHigher": 12.8
	},
	{
		"fips": 21073,
		"state": "KY",
		"area_name": "Franklin County",
		"bachelorsOrHigher": 27.4
	},
	{
		"fips": 21075,
		"state": "KY",
		"area_name": "Fulton County",
		"bachelorsOrHigher": 13.2
	},
	{
		"fips": 21077,
		"state": "KY",
		"area_name": "Gallatin County",
		"bachelorsOrHigher": 9.9
	},
	{
		"fips": 21079,
		"state": "KY",
		"area_name": "Garrard County",
		"bachelorsOrHigher": 16.5
	},
	{
		"fips": 21081,
		"state": "KY",
		"area_name": "Grant County",
		"bachelorsOrHigher": 11.4
	},
	{
		"fips": 21083,
		"state": "KY",
		"area_name": "Graves County",
		"bachelorsOrHigher": 16.7
	},
	{
		"fips": 21085,
		"state": "KY",
		"area_name": "Grayson County",
		"bachelorsOrHigher": 9.1
	},
	{
		"fips": 21087,
		"state": "KY",
		"area_name": "Green County",
		"bachelorsOrHigher": 10.8
	},
	{
		"fips": 21089,
		"state": "KY",
		"area_name": "Greenup County",
		"bachelorsOrHigher": 15.7
	},
	{
		"fips": 21091,
		"state": "KY",
		"area_name": "Hancock County",
		"bachelorsOrHigher": 11.6
	},
	{
		"fips": 21093,
		"state": "KY",
		"area_name": "Hardin County",
		"bachelorsOrHigher": 22.2
	},
	{
		"fips": 21095,
		"state": "KY",
		"area_name": "Harlan County",
		"bachelorsOrHigher": 11.1
	},
	{
		"fips": 21097,
		"state": "KY",
		"area_name": "Harrison County",
		"bachelorsOrHigher": 13.6
	},
	{
		"fips": 21099,
		"state": "KY",
		"area_name": "Hart County",
		"bachelorsOrHigher": 9.8
	},
	{
		"fips": 21101,
		"state": "KY",
		"area_name": "Henderson County",
		"bachelorsOrHigher": 16.4
	},
	{
		"fips": 21103,
		"state": "KY",
		"area_name": "Henry County",
		"bachelorsOrHigher": 11.6
	},
	{
		"fips": 21105,
		"state": "KY",
		"area_name": "Hickman County",
		"bachelorsOrHigher": 11.7
	},
	{
		"fips": 21107,
		"state": "KY",
		"area_name": "Hopkins County",
		"bachelorsOrHigher": 13.9
	},
	{
		"fips": 21109,
		"state": "KY",
		"area_name": "Jackson County",
		"bachelorsOrHigher": 8.6
	},
	{
		"fips": 21111,
		"state": "KY",
		"area_name": "Jefferson County",
		"bachelorsOrHigher": 30.8
	},
	{
		"fips": 21113,
		"state": "KY",
		"area_name": "Jessamine County",
		"bachelorsOrHigher": 28.3
	},
	{
		"fips": 21115,
		"state": "KY",
		"area_name": "Johnson County",
		"bachelorsOrHigher": 10.5
	},
	{
		"fips": 21117,
		"state": "KY",
		"area_name": "Kenton County",
		"bachelorsOrHigher": 28.9
	},
	{
		"fips": 21119,
		"state": "KY",
		"area_name": "Knott County",
		"bachelorsOrHigher": 12.8
	},
	{
		"fips": 21121,
		"state": "KY",
		"area_name": "Knox County",
		"bachelorsOrHigher": 10.2
	},
	{
		"fips": 21123,
		"state": "KY",
		"area_name": "Larue County",
		"bachelorsOrHigher": 10.8
	},
	{
		"fips": 21125,
		"state": "KY",
		"area_name": "Laurel County",
		"bachelorsOrHigher": 11.9
	},
	{
		"fips": 21127,
		"state": "KY",
		"area_name": "Lawrence County",
		"bachelorsOrHigher": 11.7
	},
	{
		"fips": 21129,
		"state": "KY",
		"area_name": "Lee County",
		"bachelorsOrHigher": 7
	},
	{
		"fips": 21131,
		"state": "KY",
		"area_name": "Leslie County",
		"bachelorsOrHigher": 8.2
	},
	{
		"fips": 21133,
		"state": "KY",
		"area_name": "Letcher County",
		"bachelorsOrHigher": 11.9
	},
	{
		"fips": 21135,
		"state": "KY",
		"area_name": "Lewis County",
		"bachelorsOrHigher": 10.9
	},
	{
		"fips": 21137,
		"state": "KY",
		"area_name": "Lincoln County",
		"bachelorsOrHigher": 10.2
	},
	{
		"fips": 21139,
		"state": "KY",
		"area_name": "Livingston County",
		"bachelorsOrHigher": 10
	},
	{
		"fips": 21141,
		"state": "KY",
		"area_name": "Logan County",
		"bachelorsOrHigher": 13
	},
	{
		"fips": 21143,
		"state": "KY",
		"area_name": "Lyon County",
		"bachelorsOrHigher": 15.8
	},
	{
		"fips": 21145,
		"state": "KY",
		"area_name": "McCracken County",
		"bachelorsOrHigher": 22.7
	},
	{
		"fips": 21147,
		"state": "KY",
		"area_name": "McCreary County",
		"bachelorsOrHigher": 7.5
	},
	{
		"fips": 21149,
		"state": "KY",
		"area_name": "McLean County",
		"bachelorsOrHigher": 10.2
	},
	{
		"fips": 21151,
		"state": "KY",
		"area_name": "Madison County",
		"bachelorsOrHigher": 28.6
	},
	{
		"fips": 21153,
		"state": "KY",
		"area_name": "Magoffin County",
		"bachelorsOrHigher": 8.5
	},
	{
		"fips": 21155,
		"state": "KY",
		"area_name": "Marion County",
		"bachelorsOrHigher": 13
	},
	{
		"fips": 21157,
		"state": "KY",
		"area_name": "Marshall County",
		"bachelorsOrHigher": 16.4
	},
	{
		"fips": 21159,
		"state": "KY",
		"area_name": "Martin County",
		"bachelorsOrHigher": 7.3
	},
	{
		"fips": 21161,
		"state": "KY",
		"area_name": "Mason County",
		"bachelorsOrHigher": 14.4
	},
	{
		"fips": 21163,
		"state": "KY",
		"area_name": "Meade County",
		"bachelorsOrHigher": 13.4
	},
	{
		"fips": 21165,
		"state": "KY",
		"area_name": "Menifee County",
		"bachelorsOrHigher": 11.9
	},
	{
		"fips": 21167,
		"state": "KY",
		"area_name": "Mercer County",
		"bachelorsOrHigher": 18.3
	},
	{
		"fips": 21169,
		"state": "KY",
		"area_name": "Metcalfe County",
		"bachelorsOrHigher": 11.1
	},
	{
		"fips": 21171,
		"state": "KY",
		"area_name": "Monroe County",
		"bachelorsOrHigher": 11.7
	},
	{
		"fips": 21173,
		"state": "KY",
		"area_name": "Montgomery County",
		"bachelorsOrHigher": 17.3
	},
	{
		"fips": 21175,
		"state": "KY",
		"area_name": "Morgan County",
		"bachelorsOrHigher": 12.6
	},
	{
		"fips": 21177,
		"state": "KY",
		"area_name": "Muhlenberg County",
		"bachelorsOrHigher": 9.6
	},
	{
		"fips": 21179,
		"state": "KY",
		"area_name": "Nelson County",
		"bachelorsOrHigher": 16.2
	},
	{
		"fips": 21181,
		"state": "KY",
		"area_name": "Nicholas County",
		"bachelorsOrHigher": 13.7
	},
	{
		"fips": 21183,
		"state": "KY",
		"area_name": "Ohio County",
		"bachelorsOrHigher": 8.2
	},
	{
		"fips": 21185,
		"state": "KY",
		"area_name": "Oldham County",
		"bachelorsOrHigher": 39.8
	},
	{
		"fips": 21187,
		"state": "KY",
		"area_name": "Owen County",
		"bachelorsOrHigher": 14
	},
	{
		"fips": 21189,
		"state": "KY",
		"area_name": "Owsley County",
		"bachelorsOrHigher": 15.5
	},
	{
		"fips": 21191,
		"state": "KY",
		"area_name": "Pendleton County",
		"bachelorsOrHigher": 12.6
	},
	{
		"fips": 21193,
		"state": "KY",
		"area_name": "Perry County",
		"bachelorsOrHigher": 13
	},
	{
		"fips": 21195,
		"state": "KY",
		"area_name": "Pike County",
		"bachelorsOrHigher": 12.5
	},
	{
		"fips": 21197,
		"state": "KY",
		"area_name": "Powell County",
		"bachelorsOrHigher": 13.6
	},
	{
		"fips": 21199,
		"state": "KY",
		"area_name": "Pulaski County",
		"bachelorsOrHigher": 14.5
	},
	{
		"fips": 21201,
		"state": "KY",
		"area_name": "Robertson County",
		"bachelorsOrHigher": 14.9
	},
	{
		"fips": 21203,
		"state": "KY",
		"area_name": "Rockcastle County",
		"bachelorsOrHigher": 11.1
	},
	{
		"fips": 21205,
		"state": "KY",
		"area_name": "Rowan County",
		"bachelorsOrHigher": 25.5
	},
	{
		"fips": 21207,
		"state": "KY",
		"area_name": "Russell County",
		"bachelorsOrHigher": 12
	},
	{
		"fips": 21209,
		"state": "KY",
		"area_name": "Scott County",
		"bachelorsOrHigher": 28
	},
	{
		"fips": 21211,
		"state": "KY",
		"area_name": "Shelby County",
		"bachelorsOrHigher": 23.7
	},
	{
		"fips": 21213,
		"state": "KY",
		"area_name": "Simpson County",
		"bachelorsOrHigher": 13.8
	},
	{
		"fips": 21215,
		"state": "KY",
		"area_name": "Spencer County",
		"bachelorsOrHigher": 17.4
	},
	{
		"fips": 21217,
		"state": "KY",
		"area_name": "Taylor County",
		"bachelorsOrHigher": 15
	},
	{
		"fips": 21219,
		"state": "KY",
		"area_name": "Todd County",
		"bachelorsOrHigher": 10.2
	},
	{
		"fips": 21221,
		"state": "KY",
		"area_name": "Trigg County",
		"bachelorsOrHigher": 17.6
	},
	{
		"fips": 21223,
		"state": "KY",
		"area_name": "Trimble County",
		"bachelorsOrHigher": 13.5
	},
	{
		"fips": 21225,
		"state": "KY",
		"area_name": "Union County",
		"bachelorsOrHigher": 10.9
	},
	{
		"fips": 21227,
		"state": "KY",
		"area_name": "Warren County",
		"bachelorsOrHigher": 27.3
	},
	{
		"fips": 21229,
		"state": "KY",
		"area_name": "Washington County",
		"bachelorsOrHigher": 15
	},
	{
		"fips": 21231,
		"state": "KY",
		"area_name": "Wayne County",
		"bachelorsOrHigher": 10
	},
	{
		"fips": 21233,
		"state": "KY",
		"area_name": "Webster County",
		"bachelorsOrHigher": 7.9
	},
	{
		"fips": 21235,
		"state": "KY",
		"area_name": "Whitley County",
		"bachelorsOrHigher": 14.5
	},
	{
		"fips": 21237,
		"state": "KY",
		"area_name": "Wolfe County",
		"bachelorsOrHigher": 10.7
	},
	{
		"fips": 21239,
		"state": "KY",
		"area_name": "Woodford County",
		"bachelorsOrHigher": 32.4
	},
	{
		"fips": 22001,
		"state": "LA",
		"area_name": "Acadia Parish",
		"bachelorsOrHigher": 9.9
	},
	{
		"fips": 22003,
		"state": "LA",
		"area_name": "Allen Parish",
		"bachelorsOrHigher": 11.5
	},
	{
		"fips": 22005,
		"state": "LA",
		"area_name": "Ascension Parish",
		"bachelorsOrHigher": 25.8
	},
	{
		"fips": 22007,
		"state": "LA",
		"area_name": "Assumption Parish",
		"bachelorsOrHigher": 10.7
	},
	{
		"fips": 22009,
		"state": "LA",
		"area_name": "Avoyelles Parish",
		"bachelorsOrHigher": 9.3
	},
	{
		"fips": 22011,
		"state": "LA",
		"area_name": "Beauregard Parish",
		"bachelorsOrHigher": 14.9
	},
	{
		"fips": 22013,
		"state": "LA",
		"area_name": "Bienville Parish",
		"bachelorsOrHigher": 12
	},
	{
		"fips": 22015,
		"state": "LA",
		"area_name": "Bossier Parish",
		"bachelorsOrHigher": 25.1
	},
	{
		"fips": 22017,
		"state": "LA",
		"area_name": "Caddo Parish",
		"bachelorsOrHigher": 23.5
	},
	{
		"fips": 22019,
		"state": "LA",
		"area_name": "Calcasieu Parish",
		"bachelorsOrHigher": 20.3
	},
	{
		"fips": 22021,
		"state": "LA",
		"area_name": "Caldwell Parish",
		"bachelorsOrHigher": 9.8
	},
	{
		"fips": 22023,
		"state": "LA",
		"area_name": "Cameron Parish",
		"bachelorsOrHigher": 15.7
	},
	{
		"fips": 22025,
		"state": "LA",
		"area_name": "Catahoula Parish",
		"bachelorsOrHigher": 11.6
	},
	{
		"fips": 22027,
		"state": "LA",
		"area_name": "Claiborne Parish",
		"bachelorsOrHigher": 13
	},
	{
		"fips": 22029,
		"state": "LA",
		"area_name": "Concordia Parish",
		"bachelorsOrHigher": 10.5
	},
	{
		"fips": 22031,
		"state": "LA",
		"area_name": "De Soto Parish",
		"bachelorsOrHigher": 12
	},
	{
		"fips": 22033,
		"state": "LA",
		"area_name": "East Baton Rouge Parish",
		"bachelorsOrHigher": 34.1
	},
	{
		"fips": 22035,
		"state": "LA",
		"area_name": "East Carroll Parish",
		"bachelorsOrHigher": 9.4
	},
	{
		"fips": 22037,
		"state": "LA",
		"area_name": "East Feliciana Parish",
		"bachelorsOrHigher": 12.9
	},
	{
		"fips": 22039,
		"state": "LA",
		"area_name": "Evangeline Parish",
		"bachelorsOrHigher": 12.6
	},
	{
		"fips": 22041,
		"state": "LA",
		"area_name": "Franklin Parish",
		"bachelorsOrHigher": 12
	},
	{
		"fips": 22043,
		"state": "LA",
		"area_name": "Grant Parish",
		"bachelorsOrHigher": 9.4
	},
	{
		"fips": 22045,
		"state": "LA",
		"area_name": "Iberia Parish",
		"bachelorsOrHigher": 14.3
	},
	{
		"fips": 22047,
		"state": "LA",
		"area_name": "Iberville Parish",
		"bachelorsOrHigher": 12.7
	},
	{
		"fips": 22049,
		"state": "LA",
		"area_name": "Jackson Parish",
		"bachelorsOrHigher": 13.3
	},
	{
		"fips": 22051,
		"state": "LA",
		"area_name": "Jefferson Parish",
		"bachelorsOrHigher": 23.8
	},
	{
		"fips": 22053,
		"state": "LA",
		"area_name": "Jefferson Davis Parish",
		"bachelorsOrHigher": 14.3
	},
	{
		"fips": 22055,
		"state": "LA",
		"area_name": "Lafayette Parish",
		"bachelorsOrHigher": 29
	},
	{
		"fips": 22057,
		"state": "LA",
		"area_name": "Lafourche Parish",
		"bachelorsOrHigher": 15.1
	},
	{
		"fips": 22059,
		"state": "LA",
		"area_name": "La Salle Parish",
		"bachelorsOrHigher": 13
	},
	{
		"fips": 22061,
		"state": "LA",
		"area_name": "Lincoln Parish",
		"bachelorsOrHigher": 34.6
	},
	{
		"fips": 22063,
		"state": "LA",
		"area_name": "Livingston Parish",
		"bachelorsOrHigher": 17.3
	},
	{
		"fips": 22065,
		"state": "LA",
		"area_name": "Madison Parish",
		"bachelorsOrHigher": 11.4
	},
	{
		"fips": 22067,
		"state": "LA",
		"area_name": "Morehouse Parish",
		"bachelorsOrHigher": 13.3
	},
	{
		"fips": 22069,
		"state": "LA",
		"area_name": "Natchitoches Parish",
		"bachelorsOrHigher": 20.6
	},
	{
		"fips": 22071,
		"state": "LA",
		"area_name": "Orleans Parish",
		"bachelorsOrHigher": 34.4
	},
	{
		"fips": 22073,
		"state": "LA",
		"area_name": "Ouachita Parish",
		"bachelorsOrHigher": 22.8
	},
	{
		"fips": 22075,
		"state": "LA",
		"area_name": "Plaquemines Parish",
		"bachelorsOrHigher": 15.4
	},
	{
		"fips": 22077,
		"state": "LA",
		"area_name": "Pointe Coupee Parish",
		"bachelorsOrHigher": 12.6
	},
	{
		"fips": 22079,
		"state": "LA",
		"area_name": "Rapides Parish",
		"bachelorsOrHigher": 18.2
	},
	{
		"fips": 22081,
		"state": "LA",
		"area_name": "Red River Parish",
		"bachelorsOrHigher": 11.2
	},
	{
		"fips": 22083,
		"state": "LA",
		"area_name": "Richland Parish",
		"bachelorsOrHigher": 14.7
	},
	{
		"fips": 22085,
		"state": "LA",
		"area_name": "Sabine Parish",
		"bachelorsOrHigher": 13.8
	},
	{
		"fips": 22087,
		"state": "LA",
		"area_name": "St. Bernard Parish",
		"bachelorsOrHigher": 12.5
	},
	{
		"fips": 22089,
		"state": "LA",
		"area_name": "St. Charles Parish",
		"bachelorsOrHigher": 20.1
	},
	{
		"fips": 22091,
		"state": "LA",
		"area_name": "St. Helena Parish",
		"bachelorsOrHigher": 8.9
	},
	{
		"fips": 22093,
		"state": "LA",
		"area_name": "St. James Parish",
		"bachelorsOrHigher": 13.4
	},
	{
		"fips": 22095,
		"state": "LA",
		"area_name": "St. John the Baptist Parish",
		"bachelorsOrHigher": 15.2
	},
	{
		"fips": 22097,
		"state": "LA",
		"area_name": "St. Landry Parish",
		"bachelorsOrHigher": 13.1
	},
	{
		"fips": 22099,
		"state": "LA",
		"area_name": "St. Martin Parish",
		"bachelorsOrHigher": 13.9
	},
	{
		"fips": 22101,
		"state": "LA",
		"area_name": "St. Mary Parish",
		"bachelorsOrHigher": 11.1
	},
	{
		"fips": 22103,
		"state": "LA",
		"area_name": "St. Tammany Parish",
		"bachelorsOrHigher": 30.4
	},
	{
		"fips": 22105,
		"state": "LA",
		"area_name": "Tangipahoa Parish",
		"bachelorsOrHigher": 19.3
	},
	{
		"fips": 22107,
		"state": "LA",
		"area_name": "Tensas Parish",
		"bachelorsOrHigher": 9.8
	},
	{
		"fips": 22109,
		"state": "LA",
		"area_name": "Terrebonne Parish",
		"bachelorsOrHigher": 12.9
	},
	{
		"fips": 22111,
		"state": "LA",
		"area_name": "Union Parish",
		"bachelorsOrHigher": 11.6
	},
	{
		"fips": 22113,
		"state": "LA",
		"area_name": "Vermilion Parish",
		"bachelorsOrHigher": 13
	},
	{
		"fips": 22115,
		"state": "LA",
		"area_name": "Vernon Parish",
		"bachelorsOrHigher": 18.7
	},
	{
		"fips": 22117,
		"state": "LA",
		"area_name": "Washington Parish",
		"bachelorsOrHigher": 11
	},
	{
		"fips": 22119,
		"state": "LA",
		"area_name": "Webster Parish",
		"bachelorsOrHigher": 14.4
	},
	{
		"fips": 22121,
		"state": "LA",
		"area_name": "West Baton Rouge Parish",
		"bachelorsOrHigher": 18
	},
	{
		"fips": 22123,
		"state": "LA",
		"area_name": "West Carroll Parish",
		"bachelorsOrHigher": 10.1
	},
	{
		"fips": 22125,
		"state": "LA",
		"area_name": "West Feliciana Parish",
		"bachelorsOrHigher": 19.1
	},
	{
		"fips": 22127,
		"state": "LA",
		"area_name": "Winn Parish",
		"bachelorsOrHigher": 12.3
	},
	{
		"fips": 23001,
		"state": "ME",
		"area_name": "Androscoggin County",
		"bachelorsOrHigher": 19.9
	},
	{
		"fips": 23003,
		"state": "ME",
		"area_name": "Aroostook County",
		"bachelorsOrHigher": 17
	},
	{
		"fips": 23005,
		"state": "ME",
		"area_name": "Cumberland County",
		"bachelorsOrHigher": 42
	},
	{
		"fips": 23007,
		"state": "ME",
		"area_name": "Franklin County",
		"bachelorsOrHigher": 24.5
	},
	{
		"fips": 23009,
		"state": "ME",
		"area_name": "Hancock County",
		"bachelorsOrHigher": 32.6
	},
	{
		"fips": 23011,
		"state": "ME",
		"area_name": "Kennebec County",
		"bachelorsOrHigher": 23.9
	},
	{
		"fips": 23013,
		"state": "ME",
		"area_name": "Knox County",
		"bachelorsOrHigher": 30.7
	},
	{
		"fips": 23015,
		"state": "ME",
		"area_name": "Lincoln County",
		"bachelorsOrHigher": 32.3
	},
	{
		"fips": 23017,
		"state": "ME",
		"area_name": "Oxford County",
		"bachelorsOrHigher": 18.8
	},
	{
		"fips": 23019,
		"state": "ME",
		"area_name": "Penobscot County",
		"bachelorsOrHigher": 24.2
	},
	{
		"fips": 23021,
		"state": "ME",
		"area_name": "Piscataquis County",
		"bachelorsOrHigher": 18.2
	},
	{
		"fips": 23023,
		"state": "ME",
		"area_name": "Sagadahoc County",
		"bachelorsOrHigher": 32.3
	},
	{
		"fips": 23025,
		"state": "ME",
		"area_name": "Somerset County",
		"bachelorsOrHigher": 15.7
	},
	{
		"fips": 23027,
		"state": "ME",
		"area_name": "Waldo County",
		"bachelorsOrHigher": 29
	},
	{
		"fips": 23029,
		"state": "ME",
		"area_name": "Washington County",
		"bachelorsOrHigher": 20.2
	},
	{
		"fips": 23031,
		"state": "ME",
		"area_name": "York County",
		"bachelorsOrHigher": 29.1
	},
	{
		"fips": 24001,
		"state": "MD",
		"area_name": "Allegany County",
		"bachelorsOrHigher": 17
	},
	{
		"fips": 24003,
		"state": "MD",
		"area_name": "Anne Arundel County",
		"bachelorsOrHigher": 37.6
	},
	{
		"fips": 24005,
		"state": "MD",
		"area_name": "Baltimore County",
		"bachelorsOrHigher": 36
	},
	{
		"fips": 24009,
		"state": "MD",
		"area_name": "Calvert County",
		"bachelorsOrHigher": 29.3
	},
	{
		"fips": 24011,
		"state": "MD",
		"area_name": "Caroline County",
		"bachelorsOrHigher": 13.9
	},
	{
		"fips": 24013,
		"state": "MD",
		"area_name": "Carroll County",
		"bachelorsOrHigher": 32.7
	},
	{
		"fips": 24015,
		"state": "MD",
		"area_name": "Cecil County",
		"bachelorsOrHigher": 21.8
	},
	{
		"fips": 24017,
		"state": "MD",
		"area_name": "Charles County",
		"bachelorsOrHigher": 26.8
	},
	{
		"fips": 24019,
		"state": "MD",
		"area_name": "Dorchester County",
		"bachelorsOrHigher": 19.3
	},
	{
		"fips": 24021,
		"state": "MD",
		"area_name": "Frederick County",
		"bachelorsOrHigher": 38.8
	},
	{
		"fips": 24023,
		"state": "MD",
		"area_name": "Garrett County",
		"bachelorsOrHigher": 18.4
	},
	{
		"fips": 24025,
		"state": "MD",
		"area_name": "Harford County",
		"bachelorsOrHigher": 33.4
	},
	{
		"fips": 24027,
		"state": "MD",
		"area_name": "Howard County",
		"bachelorsOrHigher": 60.4
	},
	{
		"fips": 24029,
		"state": "MD",
		"area_name": "Kent County",
		"bachelorsOrHigher": 28
	},
	{
		"fips": 24031,
		"state": "MD",
		"area_name": "Montgomery County",
		"bachelorsOrHigher": 57.4
	},
	{
		"fips": 24033,
		"state": "MD",
		"area_name": "Prince George's County",
		"bachelorsOrHigher": 30.4
	},
	{
		"fips": 24035,
		"state": "MD",
		"area_name": "Queen Anne's County",
		"bachelorsOrHigher": 34.1
	},
	{
		"fips": 24037,
		"state": "MD",
		"area_name": "St. Mary's County",
		"bachelorsOrHigher": 29.8
	},
	{
		"fips": 24039,
		"state": "MD",
		"area_name": "Somerset County",
		"bachelorsOrHigher": 15.1
	},
	{
		"fips": 24041,
		"state": "MD",
		"area_name": "Talbot County",
		"bachelorsOrHigher": 33.4
	},
	{
		"fips": 24043,
		"state": "MD",
		"area_name": "Washington County",
		"bachelorsOrHigher": 19.9
	},
	{
		"fips": 24045,
		"state": "MD",
		"area_name": "Wicomico County",
		"bachelorsOrHigher": 27.7
	},
	{
		"fips": 24047,
		"state": "MD",
		"area_name": "Worcester County",
		"bachelorsOrHigher": 28.2
	},
	{
		"fips": 24510,
		"state": "MD",
		"area_name": "Baltimore city",
		"bachelorsOrHigher": 27.7
	},
	{
		"fips": 25001,
		"state": "MA",
		"area_name": "Barnstable County",
		"bachelorsOrHigher": 39.9
	},
	{
		"fips": 25003,
		"state": "MA",
		"area_name": "Berkshire County",
		"bachelorsOrHigher": 31.3
	},
	{
		"fips": 25005,
		"state": "MA",
		"area_name": "Bristol County",
		"bachelorsOrHigher": 25.6
	},
	{
		"fips": 25007,
		"state": "MA",
		"area_name": "Dukes County",
		"bachelorsOrHigher": 41.2
	},
	{
		"fips": 25009,
		"state": "MA",
		"area_name": "Essex County",
		"bachelorsOrHigher": 37.2
	},
	{
		"fips": 25011,
		"state": "MA",
		"area_name": "Franklin County",
		"bachelorsOrHigher": 34.4
	},
	{
		"fips": 25013,
		"state": "MA",
		"area_name": "Hampden County",
		"bachelorsOrHigher": 25.4
	},
	{
		"fips": 25015,
		"state": "MA",
		"area_name": "Hampshire County",
		"bachelorsOrHigher": 43.2
	},
	{
		"fips": 25017,
		"state": "MA",
		"area_name": "Middlesex County",
		"bachelorsOrHigher": 51.3
	},
	{
		"fips": 25019,
		"state": "MA",
		"area_name": "Nantucket County",
		"bachelorsOrHigher": 45.7
	},
	{
		"fips": 25021,
		"state": "MA",
		"area_name": "Norfolk County",
		"bachelorsOrHigher": 49.9
	},
	{
		"fips": 25023,
		"state": "MA",
		"area_name": "Plymouth County",
		"bachelorsOrHigher": 34
	},
	{
		"fips": 25025,
		"state": "MA",
		"area_name": "Suffolk County",
		"bachelorsOrHigher": 41
	},
	{
		"fips": 25027,
		"state": "MA",
		"area_name": "Worcester County",
		"bachelorsOrHigher": 34.1
	},
	{
		"fips": 26001,
		"state": "MI",
		"area_name": "Alcona County",
		"bachelorsOrHigher": 13.5
	},
	{
		"fips": 26003,
		"state": "MI",
		"area_name": "Alger County",
		"bachelorsOrHigher": 17.1
	},
	{
		"fips": 26005,
		"state": "MI",
		"area_name": "Allegan County",
		"bachelorsOrHigher": 20.8
	},
	{
		"fips": 26007,
		"state": "MI",
		"area_name": "Alpena County",
		"bachelorsOrHigher": 16.1
	},
	{
		"fips": 26009,
		"state": "MI",
		"area_name": "Antrim County",
		"bachelorsOrHigher": 24.9
	},
	{
		"fips": 26011,
		"state": "MI",
		"area_name": "Arenac County",
		"bachelorsOrHigher": 11.5
	},
	{
		"fips": 26013,
		"state": "MI",
		"area_name": "Baraga County",
		"bachelorsOrHigher": 12.5
	},
	{
		"fips": 26015,
		"state": "MI",
		"area_name": "Barry County",
		"bachelorsOrHigher": 18.5
	},
	{
		"fips": 26017,
		"state": "MI",
		"area_name": "Bay County",
		"bachelorsOrHigher": 18.6
	},
	{
		"fips": 26019,
		"state": "MI",
		"area_name": "Benzie County",
		"bachelorsOrHigher": 24.8
	},
	{
		"fips": 26021,
		"state": "MI",
		"area_name": "Berrien County",
		"bachelorsOrHigher": 24.8
	},
	{
		"fips": 26023,
		"state": "MI",
		"area_name": "Branch County",
		"bachelorsOrHigher": 13.1
	},
	{
		"fips": 26025,
		"state": "MI",
		"area_name": "Calhoun County",
		"bachelorsOrHigher": 19.6
	},
	{
		"fips": 26027,
		"state": "MI",
		"area_name": "Cass County",
		"bachelorsOrHigher": 16.9
	},
	{
		"fips": 26029,
		"state": "MI",
		"area_name": "Charlevoix County",
		"bachelorsOrHigher": 27.1
	},
	{
		"fips": 26031,
		"state": "MI",
		"area_name": "Cheboygan County",
		"bachelorsOrHigher": 16.8
	},
	{
		"fips": 26033,
		"state": "MI",
		"area_name": "Chippewa County",
		"bachelorsOrHigher": 19.4
	},
	{
		"fips": 26035,
		"state": "MI",
		"area_name": "Clare County",
		"bachelorsOrHigher": 10.5
	},
	{
		"fips": 26037,
		"state": "MI",
		"area_name": "Clinton County",
		"bachelorsOrHigher": 28.7
	},
	{
		"fips": 26039,
		"state": "MI",
		"area_name": "Crawford County",
		"bachelorsOrHigher": 15.8
	},
	{
		"fips": 26041,
		"state": "MI",
		"area_name": "Delta County",
		"bachelorsOrHigher": 18
	},
	{
		"fips": 26043,
		"state": "MI",
		"area_name": "Dickinson County",
		"bachelorsOrHigher": 21.4
	},
	{
		"fips": 26045,
		"state": "MI",
		"area_name": "Eaton County",
		"bachelorsOrHigher": 24.2
	},
	{
		"fips": 26047,
		"state": "MI",
		"area_name": "Emmet County",
		"bachelorsOrHigher": 33.3
	},
	{
		"fips": 26049,
		"state": "MI",
		"area_name": "Genesee County",
		"bachelorsOrHigher": 19.2
	},
	{
		"fips": 26051,
		"state": "MI",
		"area_name": "Gladwin County",
		"bachelorsOrHigher": 12.5
	},
	{
		"fips": 26053,
		"state": "MI",
		"area_name": "Gogebic County",
		"bachelorsOrHigher": 17.6
	},
	{
		"fips": 26055,
		"state": "MI",
		"area_name": "Grand Traverse County",
		"bachelorsOrHigher": 30.8
	},
	{
		"fips": 26057,
		"state": "MI",
		"area_name": "Gratiot County",
		"bachelorsOrHigher": 13.8
	},
	{
		"fips": 26059,
		"state": "MI",
		"area_name": "Hillsdale County",
		"bachelorsOrHigher": 15.6
	},
	{
		"fips": 26061,
		"state": "MI",
		"area_name": "Houghton County",
		"bachelorsOrHigher": 29.6
	},
	{
		"fips": 26063,
		"state": "MI",
		"area_name": "Huron County",
		"bachelorsOrHigher": 14.1
	},
	{
		"fips": 26065,
		"state": "MI",
		"area_name": "Ingham County",
		"bachelorsOrHigher": 36.5
	},
	{
		"fips": 26067,
		"state": "MI",
		"area_name": "Ionia County",
		"bachelorsOrHigher": 14.2
	},
	{
		"fips": 26069,
		"state": "MI",
		"area_name": "Iosco County",
		"bachelorsOrHigher": 14.5
	},
	{
		"fips": 26071,
		"state": "MI",
		"area_name": "Iron County",
		"bachelorsOrHigher": 19.9
	},
	{
		"fips": 26073,
		"state": "MI",
		"area_name": "Isabella County",
		"bachelorsOrHigher": 26.1
	},
	{
		"fips": 26075,
		"state": "MI",
		"area_name": "Jackson County",
		"bachelorsOrHigher": 19
	},
	{
		"fips": 26077,
		"state": "MI",
		"area_name": "Kalamazoo County",
		"bachelorsOrHigher": 34.4
	},
	{
		"fips": 26079,
		"state": "MI",
		"area_name": "Kalkaska County",
		"bachelorsOrHigher": 13
	},
	{
		"fips": 26081,
		"state": "MI",
		"area_name": "Kent County",
		"bachelorsOrHigher": 32.6
	},
	{
		"fips": 26083,
		"state": "MI",
		"area_name": "Keweenaw County",
		"bachelorsOrHigher": 24.6
	},
	{
		"fips": 26085,
		"state": "MI",
		"area_name": "Lake County",
		"bachelorsOrHigher": 9.2
	},
	{
		"fips": 26087,
		"state": "MI",
		"area_name": "Lapeer County",
		"bachelorsOrHigher": 16.8
	},
	{
		"fips": 26089,
		"state": "MI",
		"area_name": "Leelanau County",
		"bachelorsOrHigher": 39.5
	},
	{
		"fips": 26091,
		"state": "MI",
		"area_name": "Lenawee County",
		"bachelorsOrHigher": 19.7
	},
	{
		"fips": 26093,
		"state": "MI",
		"area_name": "Livingston County",
		"bachelorsOrHigher": 33
	},
	{
		"fips": 26095,
		"state": "MI",
		"area_name": "Luce County",
		"bachelorsOrHigher": 12.4
	},
	{
		"fips": 26097,
		"state": "MI",
		"area_name": "Mackinac County",
		"bachelorsOrHigher": 17.9
	},
	{
		"fips": 26099,
		"state": "MI",
		"area_name": "Macomb County",
		"bachelorsOrHigher": 23.1
	},
	{
		"fips": 26101,
		"state": "MI",
		"area_name": "Manistee County",
		"bachelorsOrHigher": 19.4
	},
	{
		"fips": 26103,
		"state": "MI",
		"area_name": "Marquette County",
		"bachelorsOrHigher": 28.8
	},
	{
		"fips": 26105,
		"state": "MI",
		"area_name": "Mason County",
		"bachelorsOrHigher": 20.1
	},
	{
		"fips": 26107,
		"state": "MI",
		"area_name": "Mecosta County",
		"bachelorsOrHigher": 22.2
	},
	{
		"fips": 26109,
		"state": "MI",
		"area_name": "Menominee County",
		"bachelorsOrHigher": 15.5
	},
	{
		"fips": 26111,
		"state": "MI",
		"area_name": "Midland County",
		"bachelorsOrHigher": 32
	},
	{
		"fips": 26113,
		"state": "MI",
		"area_name": "Missaukee County",
		"bachelorsOrHigher": 13.3
	},
	{
		"fips": 26115,
		"state": "MI",
		"area_name": "Monroe County",
		"bachelorsOrHigher": 18.5
	},
	{
		"fips": 26117,
		"state": "MI",
		"area_name": "Montcalm County",
		"bachelorsOrHigher": 13.4
	},
	{
		"fips": 26119,
		"state": "MI",
		"area_name": "Montmorency County",
		"bachelorsOrHigher": 10.3
	},
	{
		"fips": 26121,
		"state": "MI",
		"area_name": "Muskegon County",
		"bachelorsOrHigher": 17.6
	},
	{
		"fips": 26123,
		"state": "MI",
		"area_name": "Newaygo County",
		"bachelorsOrHigher": 13
	},
	{
		"fips": 26125,
		"state": "MI",
		"area_name": "Oakland County",
		"bachelorsOrHigher": 43.7
	},
	{
		"fips": 26127,
		"state": "MI",
		"area_name": "Oceana County",
		"bachelorsOrHigher": 16.1
	},
	{
		"fips": 26129,
		"state": "MI",
		"area_name": "Ogemaw County",
		"bachelorsOrHigher": 11.6
	},
	{
		"fips": 26131,
		"state": "MI",
		"area_name": "Ontonagon County",
		"bachelorsOrHigher": 15.8
	},
	{
		"fips": 26133,
		"state": "MI",
		"area_name": "Osceola County",
		"bachelorsOrHigher": 12.9
	},
	{
		"fips": 26135,
		"state": "MI",
		"area_name": "Oscoda County",
		"bachelorsOrHigher": 9.8
	},
	{
		"fips": 26137,
		"state": "MI",
		"area_name": "Otsego County",
		"bachelorsOrHigher": 20.5
	},
	{
		"fips": 26139,
		"state": "MI",
		"area_name": "Ottawa County",
		"bachelorsOrHigher": 30.5
	},
	{
		"fips": 26141,
		"state": "MI",
		"area_name": "Presque Isle County",
		"bachelorsOrHigher": 16.4
	},
	{
		"fips": 26143,
		"state": "MI",
		"area_name": "Roscommon County",
		"bachelorsOrHigher": 13.3
	},
	{
		"fips": 26145,
		"state": "MI",
		"area_name": "Saginaw County",
		"bachelorsOrHigher": 20.1
	},
	{
		"fips": 26147,
		"state": "MI",
		"area_name": "St. Clair County",
		"bachelorsOrHigher": 17.3
	},
	{
		"fips": 26149,
		"state": "MI",
		"area_name": "St. Joseph County",
		"bachelorsOrHigher": 15
	},
	{
		"fips": 26151,
		"state": "MI",
		"area_name": "Sanilac County",
		"bachelorsOrHigher": 11.6
	},
	{
		"fips": 26153,
		"state": "MI",
		"area_name": "Schoolcraft County",
		"bachelorsOrHigher": 13.9
	},
	{
		"fips": 26155,
		"state": "MI",
		"area_name": "Shiawassee County",
		"bachelorsOrHigher": 15.1
	},
	{
		"fips": 26157,
		"state": "MI",
		"area_name": "Tuscola County",
		"bachelorsOrHigher": 13.5
	},
	{
		"fips": 26159,
		"state": "MI",
		"area_name": "Van Buren County",
		"bachelorsOrHigher": 18.4
	},
	{
		"fips": 26161,
		"state": "MI",
		"area_name": "Washtenaw County",
		"bachelorsOrHigher": 51.8
	},
	{
		"fips": 26163,
		"state": "MI",
		"area_name": "Wayne County",
		"bachelorsOrHigher": 21.6
	},
	{
		"fips": 26165,
		"state": "MI",
		"area_name": "Wexford County",
		"bachelorsOrHigher": 16.7
	},
	{
		"fips": 27001,
		"state": "MN",
		"area_name": "Aitkin County",
		"bachelorsOrHigher": 14.8
	},
	{
		"fips": 27003,
		"state": "MN",
		"area_name": "Anoka County",
		"bachelorsOrHigher": 27.3
	},
	{
		"fips": 27005,
		"state": "MN",
		"area_name": "Becker County",
		"bachelorsOrHigher": 21.6
	},
	{
		"fips": 27007,
		"state": "MN",
		"area_name": "Beltrami County",
		"bachelorsOrHigher": 26.7
	},
	{
		"fips": 27009,
		"state": "MN",
		"area_name": "Benton County",
		"bachelorsOrHigher": 20.3
	},
	{
		"fips": 27011,
		"state": "MN",
		"area_name": "Big Stone County",
		"bachelorsOrHigher": 18.3
	},
	{
		"fips": 27013,
		"state": "MN",
		"area_name": "Blue Earth County",
		"bachelorsOrHigher": 30.4
	},
	{
		"fips": 27015,
		"state": "MN",
		"area_name": "Brown County",
		"bachelorsOrHigher": 21.5
	},
	{
		"fips": 27017,
		"state": "MN",
		"area_name": "Carlton County",
		"bachelorsOrHigher": 22.3
	},
	{
		"fips": 27019,
		"state": "MN",
		"area_name": "Carver County",
		"bachelorsOrHigher": 45
	},
	{
		"fips": 27021,
		"state": "MN",
		"area_name": "Cass County",
		"bachelorsOrHigher": 19.6
	},
	{
		"fips": 27023,
		"state": "MN",
		"area_name": "Chippewa County",
		"bachelorsOrHigher": 17.6
	},
	{
		"fips": 27025,
		"state": "MN",
		"area_name": "Chisago County",
		"bachelorsOrHigher": 21.5
	},
	{
		"fips": 27027,
		"state": "MN",
		"area_name": "Clay County",
		"bachelorsOrHigher": 30.5
	},
	{
		"fips": 27029,
		"state": "MN",
		"area_name": "Clearwater County",
		"bachelorsOrHigher": 14.2
	},
	{
		"fips": 27031,
		"state": "MN",
		"area_name": "Cook County",
		"bachelorsOrHigher": 40.6
	},
	{
		"fips": 27033,
		"state": "MN",
		"area_name": "Cottonwood County",
		"bachelorsOrHigher": 17
	},
	{
		"fips": 27035,
		"state": "MN",
		"area_name": "Crow Wing County",
		"bachelorsOrHigher": 23
	},
	{
		"fips": 27037,
		"state": "MN",
		"area_name": "Dakota County",
		"bachelorsOrHigher": 39.5
	},
	{
		"fips": 27039,
		"state": "MN",
		"area_name": "Dodge County",
		"bachelorsOrHigher": 24.1
	},
	{
		"fips": 27041,
		"state": "MN",
		"area_name": "Douglas County",
		"bachelorsOrHigher": 24.2
	},
	{
		"fips": 27043,
		"state": "MN",
		"area_name": "Faribault County",
		"bachelorsOrHigher": 17
	},
	{
		"fips": 27045,
		"state": "MN",
		"area_name": "Fillmore County",
		"bachelorsOrHigher": 18.7
	},
	{
		"fips": 27047,
		"state": "MN",
		"area_name": "Freeborn County",
		"bachelorsOrHigher": 15.3
	},
	{
		"fips": 27049,
		"state": "MN",
		"area_name": "Goodhue County",
		"bachelorsOrHigher": 23.5
	},
	{
		"fips": 27051,
		"state": "MN",
		"area_name": "Grant County",
		"bachelorsOrHigher": 18.3
	},
	{
		"fips": 27053,
		"state": "MN",
		"area_name": "Hennepin County",
		"bachelorsOrHigher": 46.4
	},
	{
		"fips": 27055,
		"state": "MN",
		"area_name": "Houston County",
		"bachelorsOrHigher": 22
	},
	{
		"fips": 27057,
		"state": "MN",
		"area_name": "Hubbard County",
		"bachelorsOrHigher": 24.3
	},
	{
		"fips": 27059,
		"state": "MN",
		"area_name": "Isanti County",
		"bachelorsOrHigher": 17.1
	},
	{
		"fips": 27061,
		"state": "MN",
		"area_name": "Itasca County",
		"bachelorsOrHigher": 21.7
	},
	{
		"fips": 27063,
		"state": "MN",
		"area_name": "Jackson County",
		"bachelorsOrHigher": 18.6
	},
	{
		"fips": 27065,
		"state": "MN",
		"area_name": "Kanabec County",
		"bachelorsOrHigher": 13.4
	},
	{
		"fips": 27067,
		"state": "MN",
		"area_name": "Kandiyohi County",
		"bachelorsOrHigher": 21.9
	},
	{
		"fips": 27069,
		"state": "MN",
		"area_name": "Kittson County",
		"bachelorsOrHigher": 21.2
	},
	{
		"fips": 27071,
		"state": "MN",
		"area_name": "Koochiching County",
		"bachelorsOrHigher": 18.4
	},
	{
		"fips": 27073,
		"state": "MN",
		"area_name": "Lac qui Parle County",
		"bachelorsOrHigher": 18.6
	},
	{
		"fips": 27075,
		"state": "MN",
		"area_name": "Lake County",
		"bachelorsOrHigher": 23.2
	},
	{
		"fips": 27077,
		"state": "MN",
		"area_name": "Lake of the Woods County",
		"bachelorsOrHigher": 16.2
	},
	{
		"fips": 27079,
		"state": "MN",
		"area_name": "Le Sueur County",
		"bachelorsOrHigher": 21.6
	},
	{
		"fips": 27081,
		"state": "MN",
		"area_name": "Lincoln County",
		"bachelorsOrHigher": 19.6
	},
	{
		"fips": 27083,
		"state": "MN",
		"area_name": "Lyon County",
		"bachelorsOrHigher": 27.2
	},
	{
		"fips": 27085,
		"state": "MN",
		"area_name": "McLeod County",
		"bachelorsOrHigher": 18.9
	},
	{
		"fips": 27087,
		"state": "MN",
		"area_name": "Mahnomen County",
		"bachelorsOrHigher": 13
	},
	{
		"fips": 27089,
		"state": "MN",
		"area_name": "Marshall County",
		"bachelorsOrHigher": 17.9
	},
	{
		"fips": 27091,
		"state": "MN",
		"area_name": "Martin County",
		"bachelorsOrHigher": 17.9
	},
	{
		"fips": 27093,
		"state": "MN",
		"area_name": "Meeker County",
		"bachelorsOrHigher": 18
	},
	{
		"fips": 27095,
		"state": "MN",
		"area_name": "Mille Lacs County",
		"bachelorsOrHigher": 15.3
	},
	{
		"fips": 27097,
		"state": "MN",
		"area_name": "Morrison County",
		"bachelorsOrHigher": 16.4
	},
	{
		"fips": 27099,
		"state": "MN",
		"area_name": "Mower County",
		"bachelorsOrHigher": 17.9
	},
	{
		"fips": 27101,
		"state": "MN",
		"area_name": "Murray County",
		"bachelorsOrHigher": 17.2
	},
	{
		"fips": 27103,
		"state": "MN",
		"area_name": "Nicollet County",
		"bachelorsOrHigher": 32.3
	},
	{
		"fips": 27105,
		"state": "MN",
		"area_name": "Nobles County",
		"bachelorsOrHigher": 14.4
	},
	{
		"fips": 27107,
		"state": "MN",
		"area_name": "Norman County",
		"bachelorsOrHigher": 14.7
	},
	{
		"fips": 27109,
		"state": "MN",
		"area_name": "Olmsted County",
		"bachelorsOrHigher": 40.2
	},
	{
		"fips": 27111,
		"state": "MN",
		"area_name": "Otter Tail County",
		"bachelorsOrHigher": 23.6
	},
	{
		"fips": 27113,
		"state": "MN",
		"area_name": "Pennington County",
		"bachelorsOrHigher": 16.6
	},
	{
		"fips": 27115,
		"state": "MN",
		"area_name": "Pine County",
		"bachelorsOrHigher": 12.6
	},
	{
		"fips": 27117,
		"state": "MN",
		"area_name": "Pipestone County",
		"bachelorsOrHigher": 18
	},
	{
		"fips": 27119,
		"state": "MN",
		"area_name": "Polk County",
		"bachelorsOrHigher": 21.3
	},
	{
		"fips": 27121,
		"state": "MN",
		"area_name": "Pope County",
		"bachelorsOrHigher": 20.6
	},
	{
		"fips": 27123,
		"state": "MN",
		"area_name": "Ramsey County",
		"bachelorsOrHigher": 39.8
	},
	{
		"fips": 27125,
		"state": "MN",
		"area_name": "Red Lake County",
		"bachelorsOrHigher": 16.1
	},
	{
		"fips": 27127,
		"state": "MN",
		"area_name": "Redwood County",
		"bachelorsOrHigher": 16.3
	},
	{
		"fips": 27129,
		"state": "MN",
		"area_name": "Renville County",
		"bachelorsOrHigher": 15.6
	},
	{
		"fips": 27131,
		"state": "MN",
		"area_name": "Rice County",
		"bachelorsOrHigher": 27.5
	},
	{
		"fips": 27133,
		"state": "MN",
		"area_name": "Rock County",
		"bachelorsOrHigher": 18
	},
	{
		"fips": 27135,
		"state": "MN",
		"area_name": "Roseau County",
		"bachelorsOrHigher": 18
	},
	{
		"fips": 27137,
		"state": "MN",
		"area_name": "St. Louis County",
		"bachelorsOrHigher": 26.4
	},
	{
		"fips": 27139,
		"state": "MN",
		"area_name": "Scott County",
		"bachelorsOrHigher": 38.3
	},
	{
		"fips": 27141,
		"state": "MN",
		"area_name": "Sherburne County",
		"bachelorsOrHigher": 26.2
	},
	{
		"fips": 27143,
		"state": "MN",
		"area_name": "Sibley County",
		"bachelorsOrHigher": 15.8
	},
	{
		"fips": 27145,
		"state": "MN",
		"area_name": "Stearns County",
		"bachelorsOrHigher": 25.5
	},
	{
		"fips": 27147,
		"state": "MN",
		"area_name": "Steele County",
		"bachelorsOrHigher": 24.8
	},
	{
		"fips": 27149,
		"state": "MN",
		"area_name": "Stevens County",
		"bachelorsOrHigher": 26.3
	},
	{
		"fips": 27151,
		"state": "MN",
		"area_name": "Swift County",
		"bachelorsOrHigher": 16.6
	},
	{
		"fips": 27153,
		"state": "MN",
		"area_name": "Todd County",
		"bachelorsOrHigher": 13.8
	},
	{
		"fips": 27155,
		"state": "MN",
		"area_name": "Traverse County",
		"bachelorsOrHigher": 16.8
	},
	{
		"fips": 27157,
		"state": "MN",
		"area_name": "Wabasha County",
		"bachelorsOrHigher": 20.7
	},
	{
		"fips": 27159,
		"state": "MN",
		"area_name": "Wadena County",
		"bachelorsOrHigher": 12.9
	},
	{
		"fips": 27161,
		"state": "MN",
		"area_name": "Waseca County",
		"bachelorsOrHigher": 19.9
	},
	{
		"fips": 27163,
		"state": "MN",
		"area_name": "Washington County",
		"bachelorsOrHigher": 41.3
	},
	{
		"fips": 27165,
		"state": "MN",
		"area_name": "Watonwan County",
		"bachelorsOrHigher": 16.7
	},
	{
		"fips": 27167,
		"state": "MN",
		"area_name": "Wilkin County",
		"bachelorsOrHigher": 16.4
	},
	{
		"fips": 27169,
		"state": "MN",
		"area_name": "Winona County",
		"bachelorsOrHigher": 27.5
	},
	{
		"fips": 27171,
		"state": "MN",
		"area_name": "Wright County",
		"bachelorsOrHigher": 27.4
	},
	{
		"fips": 27173,
		"state": "MN",
		"area_name": "Yellow Medicine County",
		"bachelorsOrHigher": 17.3
	},
	{
		"fips": 28001,
		"state": "MS",
		"area_name": "Adams County",
		"bachelorsOrHigher": 17.2
	},
	{
		"fips": 28003,
		"state": "MS",
		"area_name": "Alcorn County",
		"bachelorsOrHigher": 16.2
	},
	{
		"fips": 28005,
		"state": "MS",
		"area_name": "Amite County",
		"bachelorsOrHigher": 11.5
	},
	{
		"fips": 28007,
		"state": "MS",
		"area_name": "Attala County",
		"bachelorsOrHigher": 15.1
	},
	{
		"fips": 28009,
		"state": "MS",
		"area_name": "Benton County",
		"bachelorsOrHigher": 8.6
	},
	{
		"fips": 28011,
		"state": "MS",
		"area_name": "Bolivar County",
		"bachelorsOrHigher": 21.4
	},
	{
		"fips": 28013,
		"state": "MS",
		"area_name": "Calhoun County",
		"bachelorsOrHigher": 10.6
	},
	{
		"fips": 28015,
		"state": "MS",
		"area_name": "Carroll County",
		"bachelorsOrHigher": 13.1
	},
	{
		"fips": 28017,
		"state": "MS",
		"area_name": "Chickasaw County",
		"bachelorsOrHigher": 10.5
	},
	{
		"fips": 28019,
		"state": "MS",
		"area_name": "Choctaw County",
		"bachelorsOrHigher": 13.1
	},
	{
		"fips": 28021,
		"state": "MS",
		"area_name": "Claiborne County",
		"bachelorsOrHigher": 16.5
	},
	{
		"fips": 28023,
		"state": "MS",
		"area_name": "Clarke County",
		"bachelorsOrHigher": 12
	},
	{
		"fips": 28025,
		"state": "MS",
		"area_name": "Clay County",
		"bachelorsOrHigher": 19.1
	},
	{
		"fips": 28027,
		"state": "MS",
		"area_name": "Coahoma County",
		"bachelorsOrHigher": 17.8
	},
	{
		"fips": 28029,
		"state": "MS",
		"area_name": "Copiah County",
		"bachelorsOrHigher": 13.9
	},
	{
		"fips": 28031,
		"state": "MS",
		"area_name": "Covington County",
		"bachelorsOrHigher": 14.5
	},
	{
		"fips": 28033,
		"state": "MS",
		"area_name": "DeSoto County",
		"bachelorsOrHigher": 21.7
	},
	{
		"fips": 28035,
		"state": "MS",
		"area_name": "Forrest County",
		"bachelorsOrHigher": 26.8
	},
	{
		"fips": 28037,
		"state": "MS",
		"area_name": "Franklin County",
		"bachelorsOrHigher": 16.7
	},
	{
		"fips": 28039,
		"state": "MS",
		"area_name": "George County",
		"bachelorsOrHigher": 11.1
	},
	{
		"fips": 28041,
		"state": "MS",
		"area_name": "Greene County",
		"bachelorsOrHigher": 8.7
	},
	{
		"fips": 28043,
		"state": "MS",
		"area_name": "Grenada County",
		"bachelorsOrHigher": 14.2
	},
	{
		"fips": 28045,
		"state": "MS",
		"area_name": "Hancock County",
		"bachelorsOrHigher": 22.5
	},
	{
		"fips": 28047,
		"state": "MS",
		"area_name": "Harrison County",
		"bachelorsOrHigher": 20.8
	},
	{
		"fips": 28049,
		"state": "MS",
		"area_name": "Hinds County",
		"bachelorsOrHigher": 27.5
	},
	{
		"fips": 28051,
		"state": "MS",
		"area_name": "Holmes County",
		"bachelorsOrHigher": 12
	},
	{
		"fips": 28053,
		"state": "MS",
		"area_name": "Humphreys County",
		"bachelorsOrHigher": 12
	},
	{
		"fips": 28055,
		"state": "MS",
		"area_name": "Issaquena County",
		"bachelorsOrHigher": 7.8
	},
	{
		"fips": 28057,
		"state": "MS",
		"area_name": "Itawamba County",
		"bachelorsOrHigher": 13
	},
	{
		"fips": 28059,
		"state": "MS",
		"area_name": "Jackson County",
		"bachelorsOrHigher": 20.5
	},
	{
		"fips": 28061,
		"state": "MS",
		"area_name": "Jasper County",
		"bachelorsOrHigher": 13.3
	},
	{
		"fips": 28063,
		"state": "MS",
		"area_name": "Jefferson County",
		"bachelorsOrHigher": 20.4
	},
	{
		"fips": 28065,
		"state": "MS",
		"area_name": "Jefferson Davis County",
		"bachelorsOrHigher": 14.7
	},
	{
		"fips": 28067,
		"state": "MS",
		"area_name": "Jones County",
		"bachelorsOrHigher": 17.3
	},
	{
		"fips": 28069,
		"state": "MS",
		"area_name": "Kemper County",
		"bachelorsOrHigher": 10.8
	},
	{
		"fips": 28071,
		"state": "MS",
		"area_name": "Lafayette County",
		"bachelorsOrHigher": 36.9
	},
	{
		"fips": 28073,
		"state": "MS",
		"area_name": "Lamar County",
		"bachelorsOrHigher": 34.1
	},
	{
		"fips": 28075,
		"state": "MS",
		"area_name": "Lauderdale County",
		"bachelorsOrHigher": 19
	},
	{
		"fips": 28077,
		"state": "MS",
		"area_name": "Lawrence County",
		"bachelorsOrHigher": 12.8
	},
	{
		"fips": 28079,
		"state": "MS",
		"area_name": "Leake County",
		"bachelorsOrHigher": 11.6
	},
	{
		"fips": 28081,
		"state": "MS",
		"area_name": "Lee County",
		"bachelorsOrHigher": 21.7
	},
	{
		"fips": 28083,
		"state": "MS",
		"area_name": "Leflore County",
		"bachelorsOrHigher": 18.6
	},
	{
		"fips": 28085,
		"state": "MS",
		"area_name": "Lincoln County",
		"bachelorsOrHigher": 14.7
	},
	{
		"fips": 28087,
		"state": "MS",
		"area_name": "Lowndes County",
		"bachelorsOrHigher": 21.4
	},
	{
		"fips": 28089,
		"state": "MS",
		"area_name": "Madison County",
		"bachelorsOrHigher": 46.3
	},
	{
		"fips": 28091,
		"state": "MS",
		"area_name": "Marion County",
		"bachelorsOrHigher": 12.3
	},
	{
		"fips": 28093,
		"state": "MS",
		"area_name": "Marshall County",
		"bachelorsOrHigher": 11.3
	},
	{
		"fips": 28095,
		"state": "MS",
		"area_name": "Monroe County",
		"bachelorsOrHigher": 14.1
	},
	{
		"fips": 28097,
		"state": "MS",
		"area_name": "Montgomery County",
		"bachelorsOrHigher": 15.7
	},
	{
		"fips": 28099,
		"state": "MS",
		"area_name": "Neshoba County",
		"bachelorsOrHigher": 13.8
	},
	{
		"fips": 28101,
		"state": "MS",
		"area_name": "Newton County",
		"bachelorsOrHigher": 15.8
	},
	{
		"fips": 28103,
		"state": "MS",
		"area_name": "Noxubee County",
		"bachelorsOrHigher": 11.2
	},
	{
		"fips": 28105,
		"state": "MS",
		"area_name": "Oktibbeha County",
		"bachelorsOrHigher": 42.6
	},
	{
		"fips": 28107,
		"state": "MS",
		"area_name": "Panola County",
		"bachelorsOrHigher": 14.9
	},
	{
		"fips": 28109,
		"state": "MS",
		"area_name": "Pearl River County",
		"bachelorsOrHigher": 13.5
	},
	{
		"fips": 28111,
		"state": "MS",
		"area_name": "Perry County",
		"bachelorsOrHigher": 8.4
	},
	{
		"fips": 28113,
		"state": "MS",
		"area_name": "Pike County",
		"bachelorsOrHigher": 16.3
	},
	{
		"fips": 28115,
		"state": "MS",
		"area_name": "Pontotoc County",
		"bachelorsOrHigher": 12.2
	},
	{
		"fips": 28117,
		"state": "MS",
		"area_name": "Prentiss County",
		"bachelorsOrHigher": 11.8
	},
	{
		"fips": 28119,
		"state": "MS",
		"area_name": "Quitman County",
		"bachelorsOrHigher": 13.6
	},
	{
		"fips": 28121,
		"state": "MS",
		"area_name": "Rankin County",
		"bachelorsOrHigher": 28.7
	},
	{
		"fips": 28123,
		"state": "MS",
		"area_name": "Scott County",
		"bachelorsOrHigher": 11.2
	},
	{
		"fips": 28125,
		"state": "MS",
		"area_name": "Sharkey County",
		"bachelorsOrHigher": 21.6
	},
	{
		"fips": 28127,
		"state": "MS",
		"area_name": "Simpson County",
		"bachelorsOrHigher": 13.4
	},
	{
		"fips": 28129,
		"state": "MS",
		"area_name": "Smith County",
		"bachelorsOrHigher": 13.6
	},
	{
		"fips": 28131,
		"state": "MS",
		"area_name": "Stone County",
		"bachelorsOrHigher": 13.1
	},
	{
		"fips": 28133,
		"state": "MS",
		"area_name": "Sunflower County",
		"bachelorsOrHigher": 13.8
	},
	{
		"fips": 28135,
		"state": "MS",
		"area_name": "Tallahatchie County",
		"bachelorsOrHigher": 9.7
	},
	{
		"fips": 28137,
		"state": "MS",
		"area_name": "Tate County",
		"bachelorsOrHigher": 16.8
	},
	{
		"fips": 28139,
		"state": "MS",
		"area_name": "Tippah County",
		"bachelorsOrHigher": 10.7
	},
	{
		"fips": 28141,
		"state": "MS",
		"area_name": "Tishomingo County",
		"bachelorsOrHigher": 11.3
	},
	{
		"fips": 28143,
		"state": "MS",
		"area_name": "Tunica County",
		"bachelorsOrHigher": 17.6
	},
	{
		"fips": 28145,
		"state": "MS",
		"area_name": "Union County",
		"bachelorsOrHigher": 14.9
	},
	{
		"fips": 28147,
		"state": "MS",
		"area_name": "Walthall County",
		"bachelorsOrHigher": 13
	},
	{
		"fips": 28149,
		"state": "MS",
		"area_name": "Warren County",
		"bachelorsOrHigher": 25.2
	},
	{
		"fips": 28151,
		"state": "MS",
		"area_name": "Washington County",
		"bachelorsOrHigher": 18.7
	},
	{
		"fips": 28153,
		"state": "MS",
		"area_name": "Wayne County",
		"bachelorsOrHigher": 10.3
	},
	{
		"fips": 28155,
		"state": "MS",
		"area_name": "Webster County",
		"bachelorsOrHigher": 19
	},
	{
		"fips": 28157,
		"state": "MS",
		"area_name": "Wilkinson County",
		"bachelorsOrHigher": 14.6
	},
	{
		"fips": 28159,
		"state": "MS",
		"area_name": "Winston County",
		"bachelorsOrHigher": 17
	},
	{
		"fips": 28161,
		"state": "MS",
		"area_name": "Yalobusha County",
		"bachelorsOrHigher": 11.1
	},
	{
		"fips": 28163,
		"state": "MS",
		"area_name": "Yazoo County",
		"bachelorsOrHigher": 12.4
	},
	{
		"fips": 29001,
		"state": "MO",
		"area_name": "Adair County",
		"bachelorsOrHigher": 28.6
	},
	{
		"fips": 29003,
		"state": "MO",
		"area_name": "Andrew County",
		"bachelorsOrHigher": 22.4
	},
	{
		"fips": 29005,
		"state": "MO",
		"area_name": "Atchison County",
		"bachelorsOrHigher": 21.4
	},
	{
		"fips": 29007,
		"state": "MO",
		"area_name": "Audrain County",
		"bachelorsOrHigher": 12.3
	},
	{
		"fips": 29009,
		"state": "MO",
		"area_name": "Barry County",
		"bachelorsOrHigher": 13.3
	},
	{
		"fips": 29011,
		"state": "MO",
		"area_name": "Barton County",
		"bachelorsOrHigher": 15.3
	},
	{
		"fips": 29013,
		"state": "MO",
		"area_name": "Bates County",
		"bachelorsOrHigher": 12.1
	},
	{
		"fips": 29015,
		"state": "MO",
		"area_name": "Benton County",
		"bachelorsOrHigher": 11.8
	},
	{
		"fips": 29017,
		"state": "MO",
		"area_name": "Bollinger County",
		"bachelorsOrHigher": 11.5
	},
	{
		"fips": 29019,
		"state": "MO",
		"area_name": "Boone County",
		"bachelorsOrHigher": 47.7
	},
	{
		"fips": 29021,
		"state": "MO",
		"area_name": "Buchanan County",
		"bachelorsOrHigher": 19.7
	},
	{
		"fips": 29023,
		"state": "MO",
		"area_name": "Butler County",
		"bachelorsOrHigher": 14
	},
	{
		"fips": 29025,
		"state": "MO",
		"area_name": "Caldwell County",
		"bachelorsOrHigher": 15.3
	},
	{
		"fips": 29027,
		"state": "MO",
		"area_name": "Callaway County",
		"bachelorsOrHigher": 21.3
	},
	{
		"fips": 29029,
		"state": "MO",
		"area_name": "Camden County",
		"bachelorsOrHigher": 22
	},
	{
		"fips": 29031,
		"state": "MO",
		"area_name": "Cape Girardeau County",
		"bachelorsOrHigher": 28.1
	},
	{
		"fips": 29033,
		"state": "MO",
		"area_name": "Carroll County",
		"bachelorsOrHigher": 17
	},
	{
		"fips": 29035,
		"state": "MO",
		"area_name": "Carter County",
		"bachelorsOrHigher": 14.8
	},
	{
		"fips": 29037,
		"state": "MO",
		"area_name": "Cass County",
		"bachelorsOrHigher": 24
	},
	{
		"fips": 29039,
		"state": "MO",
		"area_name": "Cedar County",
		"bachelorsOrHigher": 14.3
	},
	{
		"fips": 29041,
		"state": "MO",
		"area_name": "Chariton County",
		"bachelorsOrHigher": 13.4
	},
	{
		"fips": 29043,
		"state": "MO",
		"area_name": "Christian County",
		"bachelorsOrHigher": 26.5
	},
	{
		"fips": 29045,
		"state": "MO",
		"area_name": "Clark County",
		"bachelorsOrHigher": 10.9
	},
	{
		"fips": 29047,
		"state": "MO",
		"area_name": "Clay County",
		"bachelorsOrHigher": 30.7
	},
	{
		"fips": 29049,
		"state": "MO",
		"area_name": "Clinton County",
		"bachelorsOrHigher": 17.5
	},
	{
		"fips": 29051,
		"state": "MO",
		"area_name": "Cole County",
		"bachelorsOrHigher": 30.9
	},
	{
		"fips": 29053,
		"state": "MO",
		"area_name": "Cooper County",
		"bachelorsOrHigher": 19.3
	},
	{
		"fips": 29055,
		"state": "MO",
		"area_name": "Crawford County",
		"bachelorsOrHigher": 13.6
	},
	{
		"fips": 29057,
		"state": "MO",
		"area_name": "Dade County",
		"bachelorsOrHigher": 15.2
	},
	{
		"fips": 29059,
		"state": "MO",
		"area_name": "Dallas County",
		"bachelorsOrHigher": 13.9
	},
	{
		"fips": 29061,
		"state": "MO",
		"area_name": "Daviess County",
		"bachelorsOrHigher": 15
	},
	{
		"fips": 29063,
		"state": "MO",
		"area_name": "DeKalb County",
		"bachelorsOrHigher": 10.9
	},
	{
		"fips": 29065,
		"state": "MO",
		"area_name": "Dent County",
		"bachelorsOrHigher": 12.4
	},
	{
		"fips": 29067,
		"state": "MO",
		"area_name": "Douglas County",
		"bachelorsOrHigher": 9.7
	},
	{
		"fips": 29069,
		"state": "MO",
		"area_name": "Dunklin County",
		"bachelorsOrHigher": 10.9
	},
	{
		"fips": 29071,
		"state": "MO",
		"area_name": "Franklin County",
		"bachelorsOrHigher": 18
	},
	{
		"fips": 29073,
		"state": "MO",
		"area_name": "Gasconade County",
		"bachelorsOrHigher": 15.6
	},
	{
		"fips": 29075,
		"state": "MO",
		"area_name": "Gentry County",
		"bachelorsOrHigher": 17.3
	},
	{
		"fips": 29077,
		"state": "MO",
		"area_name": "Greene County",
		"bachelorsOrHigher": 28.7
	},
	{
		"fips": 29079,
		"state": "MO",
		"area_name": "Grundy County",
		"bachelorsOrHigher": 16.8
	},
	{
		"fips": 29081,
		"state": "MO",
		"area_name": "Harrison County",
		"bachelorsOrHigher": 12
	},
	{
		"fips": 29083,
		"state": "MO",
		"area_name": "Henry County",
		"bachelorsOrHigher": 15.1
	},
	{
		"fips": 29085,
		"state": "MO",
		"area_name": "Hickory County",
		"bachelorsOrHigher": 11.2
	},
	{
		"fips": 29087,
		"state": "MO",
		"area_name": "Holt County",
		"bachelorsOrHigher": 18.3
	},
	{
		"fips": 29089,
		"state": "MO",
		"area_name": "Howard County",
		"bachelorsOrHigher": 23.6
	},
	{
		"fips": 29091,
		"state": "MO",
		"area_name": "Howell County",
		"bachelorsOrHigher": 15
	},
	{
		"fips": 29093,
		"state": "MO",
		"area_name": "Iron County",
		"bachelorsOrHigher": 10.9
	},
	{
		"fips": 29095,
		"state": "MO",
		"area_name": "Jackson County",
		"bachelorsOrHigher": 28
	},
	{
		"fips": 29097,
		"state": "MO",
		"area_name": "Jasper County",
		"bachelorsOrHigher": 21
	},
	{
		"fips": 29099,
		"state": "MO",
		"area_name": "Jefferson County",
		"bachelorsOrHigher": 18
	},
	{
		"fips": 29101,
		"state": "MO",
		"area_name": "Johnson County",
		"bachelorsOrHigher": 26
	},
	{
		"fips": 29103,
		"state": "MO",
		"area_name": "Knox County",
		"bachelorsOrHigher": 13.6
	},
	{
		"fips": 29105,
		"state": "MO",
		"area_name": "Laclede County",
		"bachelorsOrHigher": 14.1
	},
	{
		"fips": 29107,
		"state": "MO",
		"area_name": "Lafayette County",
		"bachelorsOrHigher": 17.8
	},
	{
		"fips": 29109,
		"state": "MO",
		"area_name": "Lawrence County",
		"bachelorsOrHigher": 15.6
	},
	{
		"fips": 29111,
		"state": "MO",
		"area_name": "Lewis County",
		"bachelorsOrHigher": 13.4
	},
	{
		"fips": 29113,
		"state": "MO",
		"area_name": "Lincoln County",
		"bachelorsOrHigher": 14.2
	},
	{
		"fips": 29115,
		"state": "MO",
		"area_name": "Linn County",
		"bachelorsOrHigher": 12.1
	},
	{
		"fips": 29117,
		"state": "MO",
		"area_name": "Livingston County",
		"bachelorsOrHigher": 17.1
	},
	{
		"fips": 29119,
		"state": "MO",
		"area_name": "McDonald County",
		"bachelorsOrHigher": 12.3
	},
	{
		"fips": 29121,
		"state": "MO",
		"area_name": "Macon County",
		"bachelorsOrHigher": 15.7
	},
	{
		"fips": 29123,
		"state": "MO",
		"area_name": "Madison County",
		"bachelorsOrHigher": 9.9
	},
	{
		"fips": 29125,
		"state": "MO",
		"area_name": "Maries County",
		"bachelorsOrHigher": 15.3
	},
	{
		"fips": 29127,
		"state": "MO",
		"area_name": "Marion County",
		"bachelorsOrHigher": 18.4
	},
	{
		"fips": 29129,
		"state": "MO",
		"area_name": "Mercer County",
		"bachelorsOrHigher": 14.2
	},
	{
		"fips": 29131,
		"state": "MO",
		"area_name": "Miller County",
		"bachelorsOrHigher": 15.4
	},
	{
		"fips": 29133,
		"state": "MO",
		"area_name": "Mississippi County",
		"bachelorsOrHigher": 10.1
	},
	{
		"fips": 29135,
		"state": "MO",
		"area_name": "Moniteau County",
		"bachelorsOrHigher": 17.2
	},
	{
		"fips": 29137,
		"state": "MO",
		"area_name": "Monroe County",
		"bachelorsOrHigher": 14
	},
	{
		"fips": 29139,
		"state": "MO",
		"area_name": "Montgomery County",
		"bachelorsOrHigher": 12.1
	},
	{
		"fips": 29141,
		"state": "MO",
		"area_name": "Morgan County",
		"bachelorsOrHigher": 13.4
	},
	{
		"fips": 29143,
		"state": "MO",
		"area_name": "New Madrid County",
		"bachelorsOrHigher": 11.9
	},
	{
		"fips": 29145,
		"state": "MO",
		"area_name": "Newton County",
		"bachelorsOrHigher": 18.8
	},
	{
		"fips": 29147,
		"state": "MO",
		"area_name": "Nodaway County",
		"bachelorsOrHigher": 23.4
	},
	{
		"fips": 29149,
		"state": "MO",
		"area_name": "Oregon County",
		"bachelorsOrHigher": 9.3
	},
	{
		"fips": 29151,
		"state": "MO",
		"area_name": "Osage County",
		"bachelorsOrHigher": 17.5
	},
	{
		"fips": 29153,
		"state": "MO",
		"area_name": "Ozark County",
		"bachelorsOrHigher": 13.6
	},
	{
		"fips": 29155,
		"state": "MO",
		"area_name": "Pemiscot County",
		"bachelorsOrHigher": 11.4
	},
	{
		"fips": 29157,
		"state": "MO",
		"area_name": "Perry County",
		"bachelorsOrHigher": 16.1
	},
	{
		"fips": 29159,
		"state": "MO",
		"area_name": "Pettis County",
		"bachelorsOrHigher": 16.7
	},
	{
		"fips": 29161,
		"state": "MO",
		"area_name": "Phelps County",
		"bachelorsOrHigher": 28.1
	},
	{
		"fips": 29163,
		"state": "MO",
		"area_name": "Pike County",
		"bachelorsOrHigher": 12.2
	},
	{
		"fips": 29165,
		"state": "MO",
		"area_name": "Platte County",
		"bachelorsOrHigher": 39.2
	},
	{
		"fips": 29167,
		"state": "MO",
		"area_name": "Polk County",
		"bachelorsOrHigher": 17
	},
	{
		"fips": 29169,
		"state": "MO",
		"area_name": "Pulaski County",
		"bachelorsOrHigher": 21.6
	},
	{
		"fips": 29171,
		"state": "MO",
		"area_name": "Putnam County",
		"bachelorsOrHigher": 15.2
	},
	{
		"fips": 29173,
		"state": "MO",
		"area_name": "Ralls County",
		"bachelorsOrHigher": 13.3
	},
	{
		"fips": 29175,
		"state": "MO",
		"area_name": "Randolph County",
		"bachelorsOrHigher": 13.9
	},
	{
		"fips": 29177,
		"state": "MO",
		"area_name": "Ray County",
		"bachelorsOrHigher": 13.9
	},
	{
		"fips": 29179,
		"state": "MO",
		"area_name": "Reynolds County",
		"bachelorsOrHigher": 6.2
	},
	{
		"fips": 29181,
		"state": "MO",
		"area_name": "Ripley County",
		"bachelorsOrHigher": 10.7
	},
	{
		"fips": 29183,
		"state": "MO",
		"area_name": "St. Charles County",
		"bachelorsOrHigher": 35.5
	},
	{
		"fips": 29185,
		"state": "MO",
		"area_name": "St. Clair County",
		"bachelorsOrHigher": 11.7
	},
	{
		"fips": 29186,
		"state": "MO",
		"area_name": "Ste. Genevieve County",
		"bachelorsOrHigher": 12.4
	},
	{
		"fips": 29187,
		"state": "MO",
		"area_name": "St. Francois County",
		"bachelorsOrHigher": 14.6
	},
	{
		"fips": 29189,
		"state": "MO",
		"area_name": "St. Louis County",
		"bachelorsOrHigher": 41.4
	},
	{
		"fips": 29195,
		"state": "MO",
		"area_name": "Saline County",
		"bachelorsOrHigher": 18.1
	},
	{
		"fips": 29197,
		"state": "MO",
		"area_name": "Schuyler County",
		"bachelorsOrHigher": 10.4
	},
	{
		"fips": 29199,
		"state": "MO",
		"area_name": "Scotland County",
		"bachelorsOrHigher": 16.9
	},
	{
		"fips": 29201,
		"state": "MO",
		"area_name": "Scott County",
		"bachelorsOrHigher": 14
	},
	{
		"fips": 29203,
		"state": "MO",
		"area_name": "Shannon County",
		"bachelorsOrHigher": 14.2
	},
	{
		"fips": 29205,
		"state": "MO",
		"area_name": "Shelby County",
		"bachelorsOrHigher": 13.6
	},
	{
		"fips": 29207,
		"state": "MO",
		"area_name": "Stoddard County",
		"bachelorsOrHigher": 13.7
	},
	{
		"fips": 29209,
		"state": "MO",
		"area_name": "Stone County",
		"bachelorsOrHigher": 15.3
	},
	{
		"fips": 29211,
		"state": "MO",
		"area_name": "Sullivan County",
		"bachelorsOrHigher": 11.8
	},
	{
		"fips": 29213,
		"state": "MO",
		"area_name": "Taney County",
		"bachelorsOrHigher": 17.9
	},
	{
		"fips": 29215,
		"state": "MO",
		"area_name": "Texas County",
		"bachelorsOrHigher": 12.6
	},
	{
		"fips": 29217,
		"state": "MO",
		"area_name": "Vernon County",
		"bachelorsOrHigher": 14.7
	},
	{
		"fips": 29219,
		"state": "MO",
		"area_name": "Warren County",
		"bachelorsOrHigher": 16.9
	},
	{
		"fips": 29221,
		"state": "MO",
		"area_name": "Washington County",
		"bachelorsOrHigher": 7.8
	},
	{
		"fips": 29223,
		"state": "MO",
		"area_name": "Wayne County",
		"bachelorsOrHigher": 10.2
	},
	{
		"fips": 29225,
		"state": "MO",
		"area_name": "Webster County",
		"bachelorsOrHigher": 16
	},
	{
		"fips": 29227,
		"state": "MO",
		"area_name": "Worth County",
		"bachelorsOrHigher": 16.4
	},
	{
		"fips": 29229,
		"state": "MO",
		"area_name": "Wright County",
		"bachelorsOrHigher": 12.2
	},
	{
		"fips": 29510,
		"state": "MO",
		"area_name": "St. Louis city",
		"bachelorsOrHigher": 30.4
	},
	{
		"fips": 30001,
		"state": "MT",
		"area_name": "Beaverhead County",
		"bachelorsOrHigher": 27.2
	},
	{
		"fips": 30003,
		"state": "MT",
		"area_name": "Big Horn County",
		"bachelorsOrHigher": 15.8
	},
	{
		"fips": 30005,
		"state": "MT",
		"area_name": "Blaine County",
		"bachelorsOrHigher": 17.3
	},
	{
		"fips": 30007,
		"state": "MT",
		"area_name": "Broadwater County",
		"bachelorsOrHigher": 21.3
	},
	{
		"fips": 30009,
		"state": "MT",
		"area_name": "Carbon County",
		"bachelorsOrHigher": 29.1
	},
	{
		"fips": 30011,
		"state": "MT",
		"area_name": "Carter County",
		"bachelorsOrHigher": 16.4
	},
	{
		"fips": 30013,
		"state": "MT",
		"area_name": "Cascade County",
		"bachelorsOrHigher": 25.5
	},
	{
		"fips": 30015,
		"state": "MT",
		"area_name": "Chouteau County",
		"bachelorsOrHigher": 24.4
	},
	{
		"fips": 30017,
		"state": "MT",
		"area_name": "Custer County",
		"bachelorsOrHigher": 19.5
	},
	{
		"fips": 30019,
		"state": "MT",
		"area_name": "Daniels County",
		"bachelorsOrHigher": 21.2
	},
	{
		"fips": 30021,
		"state": "MT",
		"area_name": "Dawson County",
		"bachelorsOrHigher": 18.3
	},
	{
		"fips": 30023,
		"state": "MT",
		"area_name": "Deer Lodge County",
		"bachelorsOrHigher": 18.6
	},
	{
		"fips": 30025,
		"state": "MT",
		"area_name": "Fallon County",
		"bachelorsOrHigher": 16.4
	},
	{
		"fips": 30027,
		"state": "MT",
		"area_name": "Fergus County",
		"bachelorsOrHigher": 27.6
	},
	{
		"fips": 30029,
		"state": "MT",
		"area_name": "Flathead County",
		"bachelorsOrHigher": 28.1
	},
	{
		"fips": 30031,
		"state": "MT",
		"area_name": "Gallatin County",
		"bachelorsOrHigher": 46.7
	},
	{
		"fips": 30033,
		"state": "MT",
		"area_name": "Garfield County",
		"bachelorsOrHigher": 14.6
	},
	{
		"fips": 30035,
		"state": "MT",
		"area_name": "Glacier County",
		"bachelorsOrHigher": 18.3
	},
	{
		"fips": 30037,
		"state": "MT",
		"area_name": "Golden Valley County",
		"bachelorsOrHigher": 20.8
	},
	{
		"fips": 30039,
		"state": "MT",
		"area_name": "Granite County",
		"bachelorsOrHigher": 27.5
	},
	{
		"fips": 30041,
		"state": "MT",
		"area_name": "Hill County",
		"bachelorsOrHigher": 23.5
	},
	{
		"fips": 30043,
		"state": "MT",
		"area_name": "Jefferson County",
		"bachelorsOrHigher": 33.5
	},
	{
		"fips": 30045,
		"state": "MT",
		"area_name": "Judith Basin County",
		"bachelorsOrHigher": 32.1
	},
	{
		"fips": 30047,
		"state": "MT",
		"area_name": "Lake County",
		"bachelorsOrHigher": 24.9
	},
	{
		"fips": 30049,
		"state": "MT",
		"area_name": "Lewis and Clark County",
		"bachelorsOrHigher": 37.6
	},
	{
		"fips": 30051,
		"state": "MT",
		"area_name": "Liberty County",
		"bachelorsOrHigher": 22.4
	},
	{
		"fips": 30053,
		"state": "MT",
		"area_name": "Lincoln County",
		"bachelorsOrHigher": 18.9
	},
	{
		"fips": 30055,
		"state": "MT",
		"area_name": "McCone County",
		"bachelorsOrHigher": 17.5
	},
	{
		"fips": 30057,
		"state": "MT",
		"area_name": "Madison County",
		"bachelorsOrHigher": 29.4
	},
	{
		"fips": 30059,
		"state": "MT",
		"area_name": "Meagher County",
		"bachelorsOrHigher": 18.4
	},
	{
		"fips": 30061,
		"state": "MT",
		"area_name": "Mineral County",
		"bachelorsOrHigher": 12.6
	},
	{
		"fips": 30063,
		"state": "MT",
		"area_name": "Missoula County",
		"bachelorsOrHigher": 40.2
	},
	{
		"fips": 30065,
		"state": "MT",
		"area_name": "Musselshell County",
		"bachelorsOrHigher": 15.1
	},
	{
		"fips": 30067,
		"state": "MT",
		"area_name": "Park County",
		"bachelorsOrHigher": 33.4
	},
	{
		"fips": 30069,
		"state": "MT",
		"area_name": "Petroleum County",
		"bachelorsOrHigher": 18
	},
	{
		"fips": 30071,
		"state": "MT",
		"area_name": "Phillips County",
		"bachelorsOrHigher": 19.8
	},
	{
		"fips": 30073,
		"state": "MT",
		"area_name": "Pondera County",
		"bachelorsOrHigher": 21.9
	},
	{
		"fips": 30075,
		"state": "MT",
		"area_name": "Powder River County",
		"bachelorsOrHigher": 20.5
	},
	{
		"fips": 30077,
		"state": "MT",
		"area_name": "Powell County",
		"bachelorsOrHigher": 18.9
	},
	{
		"fips": 30079,
		"state": "MT",
		"area_name": "Prairie County",
		"bachelorsOrHigher": 14
	},
	{
		"fips": 30081,
		"state": "MT",
		"area_name": "Ravalli County",
		"bachelorsOrHigher": 24.2
	},
	{
		"fips": 30083,
		"state": "MT",
		"area_name": "Richland County",
		"bachelorsOrHigher": 17.3
	},
	{
		"fips": 30085,
		"state": "MT",
		"area_name": "Roosevelt County",
		"bachelorsOrHigher": 12.6
	},
	{
		"fips": 30087,
		"state": "MT",
		"area_name": "Rosebud County",
		"bachelorsOrHigher": 22.9
	},
	{
		"fips": 30089,
		"state": "MT",
		"area_name": "Sanders County",
		"bachelorsOrHigher": 15.5
	},
	{
		"fips": 30091,
		"state": "MT",
		"area_name": "Sheridan County",
		"bachelorsOrHigher": 21.3
	},
	{
		"fips": 30093,
		"state": "MT",
		"area_name": "Silver Bow County",
		"bachelorsOrHigher": 23.5
	},
	{
		"fips": 30095,
		"state": "MT",
		"area_name": "Stillwater County",
		"bachelorsOrHigher": 23.5
	},
	{
		"fips": 30097,
		"state": "MT",
		"area_name": "Sweet Grass County",
		"bachelorsOrHigher": 27.8
	},
	{
		"fips": 30099,
		"state": "MT",
		"area_name": "Teton County",
		"bachelorsOrHigher": 22.4
	},
	{
		"fips": 30101,
		"state": "MT",
		"area_name": "Toole County",
		"bachelorsOrHigher": 14.4
	},
	{
		"fips": 30103,
		"state": "MT",
		"area_name": "Treasure County",
		"bachelorsOrHigher": 19.2
	},
	{
		"fips": 30105,
		"state": "MT",
		"area_name": "Valley County",
		"bachelorsOrHigher": 17
	},
	{
		"fips": 30107,
		"state": "MT",
		"area_name": "Wheatland County",
		"bachelorsOrHigher": 18.9
	},
	{
		"fips": 30109,
		"state": "MT",
		"area_name": "Wibaux County",
		"bachelorsOrHigher": 18.4
	},
	{
		"fips": 30111,
		"state": "MT",
		"area_name": "Yellowstone County",
		"bachelorsOrHigher": 28.7
	},
	{
		"fips": 31001,
		"state": "NE",
		"area_name": "Adams County",
		"bachelorsOrHigher": 22.3
	},
	{
		"fips": 31003,
		"state": "NE",
		"area_name": "Antelope County",
		"bachelorsOrHigher": 18.3
	},
	{
		"fips": 31005,
		"state": "NE",
		"area_name": "Arthur County",
		"bachelorsOrHigher": 31.6
	},
	{
		"fips": 31007,
		"state": "NE",
		"area_name": "Banner County",
		"bachelorsOrHigher": 13.6
	},
	{
		"fips": 31009,
		"state": "NE",
		"area_name": "Blaine County",
		"bachelorsOrHigher": 15.7
	},
	{
		"fips": 31011,
		"state": "NE",
		"area_name": "Boone County",
		"bachelorsOrHigher": 15.4
	},
	{
		"fips": 31013,
		"state": "NE",
		"area_name": "Box Butte County",
		"bachelorsOrHigher": 15.5
	},
	{
		"fips": 31015,
		"state": "NE",
		"area_name": "Boyd County",
		"bachelorsOrHigher": 18.6
	},
	{
		"fips": 31017,
		"state": "NE",
		"area_name": "Brown County",
		"bachelorsOrHigher": 19.6
	},
	{
		"fips": 31019,
		"state": "NE",
		"area_name": "Buffalo County",
		"bachelorsOrHigher": 32.8
	},
	{
		"fips": 31021,
		"state": "NE",
		"area_name": "Burt County",
		"bachelorsOrHigher": 16.5
	},
	{
		"fips": 31023,
		"state": "NE",
		"area_name": "Butler County",
		"bachelorsOrHigher": 14
	},
	{
		"fips": 31025,
		"state": "NE",
		"area_name": "Cass County",
		"bachelorsOrHigher": 24.5
	},
	{
		"fips": 31027,
		"state": "NE",
		"area_name": "Cedar County",
		"bachelorsOrHigher": 16.5
	},
	{
		"fips": 31029,
		"state": "NE",
		"area_name": "Chase County",
		"bachelorsOrHigher": 19
	},
	{
		"fips": 31031,
		"state": "NE",
		"area_name": "Cherry County",
		"bachelorsOrHigher": 20.4
	},
	{
		"fips": 31033,
		"state": "NE",
		"area_name": "Cheyenne County",
		"bachelorsOrHigher": 23.8
	},
	{
		"fips": 31035,
		"state": "NE",
		"area_name": "Clay County",
		"bachelorsOrHigher": 17.5
	},
	{
		"fips": 31037,
		"state": "NE",
		"area_name": "Colfax County",
		"bachelorsOrHigher": 14.1
	},
	{
		"fips": 31039,
		"state": "NE",
		"area_name": "Cuming County",
		"bachelorsOrHigher": 18.1
	},
	{
		"fips": 31041,
		"state": "NE",
		"area_name": "Custer County",
		"bachelorsOrHigher": 20.3
	},
	{
		"fips": 31043,
		"state": "NE",
		"area_name": "Dakota County",
		"bachelorsOrHigher": 11.9
	},
	{
		"fips": 31045,
		"state": "NE",
		"area_name": "Dawes County",
		"bachelorsOrHigher": 39.1
	},
	{
		"fips": 31047,
		"state": "NE",
		"area_name": "Dawson County",
		"bachelorsOrHigher": 15.1
	},
	{
		"fips": 31049,
		"state": "NE",
		"area_name": "Deuel County",
		"bachelorsOrHigher": 18.5
	},
	{
		"fips": 31051,
		"state": "NE",
		"area_name": "Dixon County",
		"bachelorsOrHigher": 16.6
	},
	{
		"fips": 31053,
		"state": "NE",
		"area_name": "Dodge County",
		"bachelorsOrHigher": 18.6
	},
	{
		"fips": 31055,
		"state": "NE",
		"area_name": "Douglas County",
		"bachelorsOrHigher": 36.6
	},
	{
		"fips": 31057,
		"state": "NE",
		"area_name": "Dundy County",
		"bachelorsOrHigher": 21.8
	},
	{
		"fips": 31059,
		"state": "NE",
		"area_name": "Fillmore County",
		"bachelorsOrHigher": 19.7
	},
	{
		"fips": 31061,
		"state": "NE",
		"area_name": "Franklin County",
		"bachelorsOrHigher": 17.8
	},
	{
		"fips": 31063,
		"state": "NE",
		"area_name": "Frontier County",
		"bachelorsOrHigher": 16.9
	},
	{
		"fips": 31065,
		"state": "NE",
		"area_name": "Furnas County",
		"bachelorsOrHigher": 18.1
	},
	{
		"fips": 31067,
		"state": "NE",
		"area_name": "Gage County",
		"bachelorsOrHigher": 20.5
	},
	{
		"fips": 31069,
		"state": "NE",
		"area_name": "Garden County",
		"bachelorsOrHigher": 22
	},
	{
		"fips": 31071,
		"state": "NE",
		"area_name": "Garfield County",
		"bachelorsOrHigher": 12.8
	},
	{
		"fips": 31073,
		"state": "NE",
		"area_name": "Gosper County",
		"bachelorsOrHigher": 18
	},
	{
		"fips": 31075,
		"state": "NE",
		"area_name": "Grant County",
		"bachelorsOrHigher": 18.6
	},
	{
		"fips": 31077,
		"state": "NE",
		"area_name": "Greeley County",
		"bachelorsOrHigher": 15.1
	},
	{
		"fips": 31079,
		"state": "NE",
		"area_name": "Hall County",
		"bachelorsOrHigher": 17.7
	},
	{
		"fips": 31081,
		"state": "NE",
		"area_name": "Hamilton County",
		"bachelorsOrHigher": 24.8
	},
	{
		"fips": 31083,
		"state": "NE",
		"area_name": "Harlan County",
		"bachelorsOrHigher": 14.5
	},
	{
		"fips": 31085,
		"state": "NE",
		"area_name": "Hayes County",
		"bachelorsOrHigher": 19
	},
	{
		"fips": 31087,
		"state": "NE",
		"area_name": "Hitchcock County",
		"bachelorsOrHigher": 15.3
	},
	{
		"fips": 31089,
		"state": "NE",
		"area_name": "Holt County",
		"bachelorsOrHigher": 20.1
	},
	{
		"fips": 31091,
		"state": "NE",
		"area_name": "Hooker County",
		"bachelorsOrHigher": 23.6
	},
	{
		"fips": 31093,
		"state": "NE",
		"area_name": "Howard County",
		"bachelorsOrHigher": 18.7
	},
	{
		"fips": 31095,
		"state": "NE",
		"area_name": "Jefferson County",
		"bachelorsOrHigher": 13.2
	},
	{
		"fips": 31097,
		"state": "NE",
		"area_name": "Johnson County",
		"bachelorsOrHigher": 13.2
	},
	{
		"fips": 31099,
		"state": "NE",
		"area_name": "Kearney County",
		"bachelorsOrHigher": 24.9
	},
	{
		"fips": 31101,
		"state": "NE",
		"area_name": "Keith County",
		"bachelorsOrHigher": 22
	},
	{
		"fips": 31103,
		"state": "NE",
		"area_name": "Keya Paha County",
		"bachelorsOrHigher": 15.8
	},
	{
		"fips": 31105,
		"state": "NE",
		"area_name": "Kimball County",
		"bachelorsOrHigher": 15.9
	},
	{
		"fips": 31107,
		"state": "NE",
		"area_name": "Knox County",
		"bachelorsOrHigher": 18.9
	},
	{
		"fips": 31109,
		"state": "NE",
		"area_name": "Lancaster County",
		"bachelorsOrHigher": 36.2
	},
	{
		"fips": 31111,
		"state": "NE",
		"area_name": "Lincoln County",
		"bachelorsOrHigher": 19.9
	},
	{
		"fips": 31113,
		"state": "NE",
		"area_name": "Logan County",
		"bachelorsOrHigher": 20.4
	},
	{
		"fips": 31115,
		"state": "NE",
		"area_name": "Loup County",
		"bachelorsOrHigher": 14.4
	},
	{
		"fips": 31117,
		"state": "NE",
		"area_name": "McPherson County",
		"bachelorsOrHigher": 25.6
	},
	{
		"fips": 31119,
		"state": "NE",
		"area_name": "Madison County",
		"bachelorsOrHigher": 21.3
	},
	{
		"fips": 31121,
		"state": "NE",
		"area_name": "Merrick County",
		"bachelorsOrHigher": 16
	},
	{
		"fips": 31123,
		"state": "NE",
		"area_name": "Morrill County",
		"bachelorsOrHigher": 17
	},
	{
		"fips": 31125,
		"state": "NE",
		"area_name": "Nance County",
		"bachelorsOrHigher": 14.4
	},
	{
		"fips": 31127,
		"state": "NE",
		"area_name": "Nemaha County",
		"bachelorsOrHigher": 27.1
	},
	{
		"fips": 31129,
		"state": "NE",
		"area_name": "Nuckolls County",
		"bachelorsOrHigher": 16.1
	},
	{
		"fips": 31131,
		"state": "NE",
		"area_name": "Otoe County",
		"bachelorsOrHigher": 22
	},
	{
		"fips": 31133,
		"state": "NE",
		"area_name": "Pawnee County",
		"bachelorsOrHigher": 14.5
	},
	{
		"fips": 31135,
		"state": "NE",
		"area_name": "Perkins County",
		"bachelorsOrHigher": 20.7
	},
	{
		"fips": 31137,
		"state": "NE",
		"area_name": "Phelps County",
		"bachelorsOrHigher": 23.8
	},
	{
		"fips": 31139,
		"state": "NE",
		"area_name": "Pierce County",
		"bachelorsOrHigher": 20.4
	},
	{
		"fips": 31141,
		"state": "NE",
		"area_name": "Platte County",
		"bachelorsOrHigher": 20.6
	},
	{
		"fips": 31143,
		"state": "NE",
		"area_name": "Polk County",
		"bachelorsOrHigher": 19.5
	},
	{
		"fips": 31145,
		"state": "NE",
		"area_name": "Red Willow County",
		"bachelorsOrHigher": 19.6
	},
	{
		"fips": 31147,
		"state": "NE",
		"area_name": "Richardson County",
		"bachelorsOrHigher": 21.7
	},
	{
		"fips": 31149,
		"state": "NE",
		"area_name": "Rock County",
		"bachelorsOrHigher": 20.1
	},
	{
		"fips": 31151,
		"state": "NE",
		"area_name": "Saline County",
		"bachelorsOrHigher": 14.3
	},
	{
		"fips": 31153,
		"state": "NE",
		"area_name": "Sarpy County",
		"bachelorsOrHigher": 36.6
	},
	{
		"fips": 31155,
		"state": "NE",
		"area_name": "Saunders County",
		"bachelorsOrHigher": 24.5
	},
	{
		"fips": 31157,
		"state": "NE",
		"area_name": "Scotts Bluff County",
		"bachelorsOrHigher": 21.2
	},
	{
		"fips": 31159,
		"state": "NE",
		"area_name": "Seward County",
		"bachelorsOrHigher": 26.8
	},
	{
		"fips": 31161,
		"state": "NE",
		"area_name": "Sheridan County",
		"bachelorsOrHigher": 24.1
	},
	{
		"fips": 31163,
		"state": "NE",
		"area_name": "Sherman County",
		"bachelorsOrHigher": 14.5
	},
	{
		"fips": 31165,
		"state": "NE",
		"area_name": "Sioux County",
		"bachelorsOrHigher": 25.1
	},
	{
		"fips": 31167,
		"state": "NE",
		"area_name": "Stanton County",
		"bachelorsOrHigher": 19.4
	},
	{
		"fips": 31169,
		"state": "NE",
		"area_name": "Thayer County",
		"bachelorsOrHigher": 17.8
	},
	{
		"fips": 31171,
		"state": "NE",
		"area_name": "Thomas County",
		"bachelorsOrHigher": 24.2
	},
	{
		"fips": 31173,
		"state": "NE",
		"area_name": "Thurston County",
		"bachelorsOrHigher": 15.6
	},
	{
		"fips": 31175,
		"state": "NE",
		"area_name": "Valley County",
		"bachelorsOrHigher": 17.4
	},
	{
		"fips": 31177,
		"state": "NE",
		"area_name": "Washington County",
		"bachelorsOrHigher": 29.8
	},
	{
		"fips": 31179,
		"state": "NE",
		"area_name": "Wayne County",
		"bachelorsOrHigher": 36.4
	},
	{
		"fips": 31181,
		"state": "NE",
		"area_name": "Webster County",
		"bachelorsOrHigher": 18.5
	},
	{
		"fips": 31183,
		"state": "NE",
		"area_name": "Wheeler County",
		"bachelorsOrHigher": 18.6
	},
	{
		"fips": 31185,
		"state": "NE",
		"area_name": "York County",
		"bachelorsOrHigher": 24.1
	},
	{
		"fips": 32001,
		"state": "NV",
		"area_name": "Churchill County",
		"bachelorsOrHigher": 14.4
	},
	{
		"fips": 32003,
		"state": "NV",
		"area_name": "Clark County",
		"bachelorsOrHigher": 22.2
	},
	{
		"fips": 32005,
		"state": "NV",
		"area_name": "Douglas County",
		"bachelorsOrHigher": 25.6
	},
	{
		"fips": 32007,
		"state": "NV",
		"area_name": "Elko County",
		"bachelorsOrHigher": 17.5
	},
	{
		"fips": 32009,
		"state": "NV",
		"area_name": "Esmeralda County",
		"bachelorsOrHigher": 13.3
	},
	{
		"fips": 32011,
		"state": "NV",
		"area_name": "Eureka County",
		"bachelorsOrHigher": 22.9
	},
	{
		"fips": 32013,
		"state": "NV",
		"area_name": "Humboldt County",
		"bachelorsOrHigher": 12.4
	},
	{
		"fips": 32015,
		"state": "NV",
		"area_name": "Lander County",
		"bachelorsOrHigher": 9.8
	},
	{
		"fips": 32017,
		"state": "NV",
		"area_name": "Lincoln County",
		"bachelorsOrHigher": 15.1
	},
	{
		"fips": 32019,
		"state": "NV",
		"area_name": "Lyon County",
		"bachelorsOrHigher": 15.9
	},
	{
		"fips": 32021,
		"state": "NV",
		"area_name": "Mineral County",
		"bachelorsOrHigher": 10.8
	},
	{
		"fips": 32023,
		"state": "NV",
		"area_name": "Nye County",
		"bachelorsOrHigher": 13.4
	},
	{
		"fips": 32027,
		"state": "NV",
		"area_name": "Pershing County",
		"bachelorsOrHigher": 11.8
	},
	{
		"fips": 32029,
		"state": "NV",
		"area_name": "Storey County",
		"bachelorsOrHigher": 20.7
	},
	{
		"fips": 32031,
		"state": "NV",
		"area_name": "Washoe County",
		"bachelorsOrHigher": 27.9
	},
	{
		"fips": 32033,
		"state": "NV",
		"area_name": "White Pine County",
		"bachelorsOrHigher": 15.5
	},
	{
		"fips": 32510,
		"state": "NV",
		"area_name": "Carson City",
		"bachelorsOrHigher": 20.4
	},
	{
		"fips": 33001,
		"state": "NH",
		"area_name": "Belknap County",
		"bachelorsOrHigher": 29.2
	},
	{
		"fips": 33003,
		"state": "NH",
		"area_name": "Carroll County",
		"bachelorsOrHigher": 32.2
	},
	{
		"fips": 33005,
		"state": "NH",
		"area_name": "Cheshire County",
		"bachelorsOrHigher": 30.8
	},
	{
		"fips": 33007,
		"state": "NH",
		"area_name": "Coos County",
		"bachelorsOrHigher": 17.8
	},
	{
		"fips": 33009,
		"state": "NH",
		"area_name": "Grafton County",
		"bachelorsOrHigher": 37.5
	},
	{
		"fips": 33011,
		"state": "NH",
		"area_name": "Hillsborough County",
		"bachelorsOrHigher": 35.5
	},
	{
		"fips": 33013,
		"state": "NH",
		"area_name": "Merrimack County",
		"bachelorsOrHigher": 33.7
	},
	{
		"fips": 33015,
		"state": "NH",
		"area_name": "Rockingham County",
		"bachelorsOrHigher": 38
	},
	{
		"fips": 33017,
		"state": "NH",
		"area_name": "Strafford County",
		"bachelorsOrHigher": 33.2
	},
	{
		"fips": 33019,
		"state": "NH",
		"area_name": "Sullivan County",
		"bachelorsOrHigher": 27.4
	},
	{
		"fips": 34001,
		"state": "NJ",
		"area_name": "Atlantic County",
		"bachelorsOrHigher": 24.4
	},
	{
		"fips": 34003,
		"state": "NJ",
		"area_name": "Bergen County",
		"bachelorsOrHigher": 46.1
	},
	{
		"fips": 34005,
		"state": "NJ",
		"area_name": "Burlington County",
		"bachelorsOrHigher": 35.3
	},
	{
		"fips": 34007,
		"state": "NJ",
		"area_name": "Camden County",
		"bachelorsOrHigher": 29.7
	},
	{
		"fips": 34009,
		"state": "NJ",
		"area_name": "Cape May County",
		"bachelorsOrHigher": 29.2
	},
	{
		"fips": 34011,
		"state": "NJ",
		"area_name": "Cumberland County",
		"bachelorsOrHigher": 13.8
	},
	{
		"fips": 34013,
		"state": "NJ",
		"area_name": "Essex County",
		"bachelorsOrHigher": 32.3
	},
	{
		"fips": 34015,
		"state": "NJ",
		"area_name": "Gloucester County",
		"bachelorsOrHigher": 28.7
	},
	{
		"fips": 34017,
		"state": "NJ",
		"area_name": "Hudson County",
		"bachelorsOrHigher": 36.8
	},
	{
		"fips": 34019,
		"state": "NJ",
		"area_name": "Hunterdon County",
		"bachelorsOrHigher": 48.3
	},
	{
		"fips": 34021,
		"state": "NJ",
		"area_name": "Mercer County",
		"bachelorsOrHigher": 39.8
	},
	{
		"fips": 34023,
		"state": "NJ",
		"area_name": "Middlesex County",
		"bachelorsOrHigher": 40.7
	},
	{
		"fips": 34025,
		"state": "NJ",
		"area_name": "Monmouth County",
		"bachelorsOrHigher": 42
	},
	{
		"fips": 34027,
		"state": "NJ",
		"area_name": "Morris County",
		"bachelorsOrHigher": 50.6
	},
	{
		"fips": 34029,
		"state": "NJ",
		"area_name": "Ocean County",
		"bachelorsOrHigher": 26.3
	},
	{
		"fips": 34031,
		"state": "NJ",
		"area_name": "Passaic County",
		"bachelorsOrHigher": 26.2
	},
	{
		"fips": 34033,
		"state": "NJ",
		"area_name": "Salem County",
		"bachelorsOrHigher": 20.4
	},
	{
		"fips": 34035,
		"state": "NJ",
		"area_name": "Somerset County",
		"bachelorsOrHigher": 52
	},
	{
		"fips": 34037,
		"state": "NJ",
		"area_name": "Sussex County",
		"bachelorsOrHigher": 33.1
	},
	{
		"fips": 34039,
		"state": "NJ",
		"area_name": "Union County",
		"bachelorsOrHigher": 32.3
	},
	{
		"fips": 34041,
		"state": "NJ",
		"area_name": "Warren County",
		"bachelorsOrHigher": 29.5
	},
	{
		"fips": 35001,
		"state": "NM",
		"area_name": "Bernalillo County",
		"bachelorsOrHigher": 32.3
	},
	{
		"fips": 35003,
		"state": "NM",
		"area_name": "Catron County",
		"bachelorsOrHigher": 20.7
	},
	{
		"fips": 35005,
		"state": "NM",
		"area_name": "Chaves County",
		"bachelorsOrHigher": 18.4
	},
	{
		"fips": 35006,
		"state": "NM",
		"area_name": "Cibola County",
		"bachelorsOrHigher": 11.7
	},
	{
		"fips": 35007,
		"state": "NM",
		"area_name": "Colfax County",
		"bachelorsOrHigher": 20.6
	},
	{
		"fips": 35009,
		"state": "NM",
		"area_name": "Curry County",
		"bachelorsOrHigher": 20.4
	},
	{
		"fips": 35011,
		"state": "NM",
		"area_name": "De Baca County",
		"bachelorsOrHigher": 11.6
	},
	{
		"fips": 35013,
		"state": "NM",
		"area_name": "Dona Ana County",
		"bachelorsOrHigher": 27.4
	},
	{
		"fips": 35015,
		"state": "NM",
		"area_name": "Eddy County",
		"bachelorsOrHigher": 16.8
	},
	{
		"fips": 35017,
		"state": "NM",
		"area_name": "Grant County",
		"bachelorsOrHigher": 25.6
	},
	{
		"fips": 35019,
		"state": "NM",
		"area_name": "Guadalupe County",
		"bachelorsOrHigher": 12.8
	},
	{
		"fips": 35021,
		"state": "NM",
		"area_name": "Harding County",
		"bachelorsOrHigher": 23.9
	},
	{
		"fips": 35023,
		"state": "NM",
		"area_name": "Hidalgo County",
		"bachelorsOrHigher": 15.6
	},
	{
		"fips": 35025,
		"state": "NM",
		"area_name": "Lea County",
		"bachelorsOrHigher": 12.6
	},
	{
		"fips": 35027,
		"state": "NM",
		"area_name": "Lincoln County",
		"bachelorsOrHigher": 26.1
	},
	{
		"fips": 35028,
		"state": "NM",
		"area_name": "Los Alamos County",
		"bachelorsOrHigher": 64
	},
	{
		"fips": 35029,
		"state": "NM",
		"area_name": "Luna County",
		"bachelorsOrHigher": 13.9
	},
	{
		"fips": 35031,
		"state": "NM",
		"area_name": "McKinley County",
		"bachelorsOrHigher": 11.4
	},
	{
		"fips": 35033,
		"state": "NM",
		"area_name": "Mora County",
		"bachelorsOrHigher": 8
	},
	{
		"fips": 35035,
		"state": "NM",
		"area_name": "Otero County",
		"bachelorsOrHigher": 17.2
	},
	{
		"fips": 35037,
		"state": "NM",
		"area_name": "Quay County",
		"bachelorsOrHigher": 13.8
	},
	{
		"fips": 35039,
		"state": "NM",
		"area_name": "Rio Arriba County",
		"bachelorsOrHigher": 15.5
	},
	{
		"fips": 35041,
		"state": "NM",
		"area_name": "Roosevelt County",
		"bachelorsOrHigher": 22.8
	},
	{
		"fips": 35043,
		"state": "NM",
		"area_name": "Sandoval County",
		"bachelorsOrHigher": 28.6
	},
	{
		"fips": 35045,
		"state": "NM",
		"area_name": "San Juan County",
		"bachelorsOrHigher": 15.2
	},
	{
		"fips": 35047,
		"state": "NM",
		"area_name": "San Miguel County",
		"bachelorsOrHigher": 19.9
	},
	{
		"fips": 35049,
		"state": "NM",
		"area_name": "Santa Fe County",
		"bachelorsOrHigher": 39.9
	},
	{
		"fips": 35051,
		"state": "NM",
		"area_name": "Sierra County",
		"bachelorsOrHigher": 18.9
	},
	{
		"fips": 35053,
		"state": "NM",
		"area_name": "Socorro County",
		"bachelorsOrHigher": 19.2
	},
	{
		"fips": 35055,
		"state": "NM",
		"area_name": "Taos County",
		"bachelorsOrHigher": 28.9
	},
	{
		"fips": 35057,
		"state": "NM",
		"area_name": "Torrance County",
		"bachelorsOrHigher": 16.2
	},
	{
		"fips": 35059,
		"state": "NM",
		"area_name": "Union County",
		"bachelorsOrHigher": 19
	},
	{
		"fips": 35061,
		"state": "NM",
		"area_name": "Valencia County",
		"bachelorsOrHigher": 16.5
	},
	{
		"fips": 36001,
		"state": "NY",
		"area_name": "Albany County",
		"bachelorsOrHigher": 38.7
	},
	{
		"fips": 36003,
		"state": "NY",
		"area_name": "Allegany County",
		"bachelorsOrHigher": 19.1
	},
	{
		"fips": 36005,
		"state": "NY",
		"area_name": "Bronx County",
		"bachelorsOrHigher": 18.3
	},
	{
		"fips": 36007,
		"state": "NY",
		"area_name": "Broome County",
		"bachelorsOrHigher": 26.2
	},
	{
		"fips": 36009,
		"state": "NY",
		"area_name": "Cattaraugus County",
		"bachelorsOrHigher": 18
	},
	{
		"fips": 36011,
		"state": "NY",
		"area_name": "Cayuga County",
		"bachelorsOrHigher": 20.2
	},
	{
		"fips": 36013,
		"state": "NY",
		"area_name": "Chautauqua County",
		"bachelorsOrHigher": 21.1
	},
	{
		"fips": 36015,
		"state": "NY",
		"area_name": "Chemung County",
		"bachelorsOrHigher": 22.9
	},
	{
		"fips": 36017,
		"state": "NY",
		"area_name": "Chenango County",
		"bachelorsOrHigher": 17.2
	},
	{
		"fips": 36019,
		"state": "NY",
		"area_name": "Clinton County",
		"bachelorsOrHigher": 22.4
	},
	{
		"fips": 36021,
		"state": "NY",
		"area_name": "Columbia County",
		"bachelorsOrHigher": 28.5
	},
	{
		"fips": 36023,
		"state": "NY",
		"area_name": "Cortland County",
		"bachelorsOrHigher": 22.7
	},
	{
		"fips": 36025,
		"state": "NY",
		"area_name": "Delaware County",
		"bachelorsOrHigher": 20.5
	},
	{
		"fips": 36027,
		"state": "NY",
		"area_name": "Dutchess County",
		"bachelorsOrHigher": 33.4
	},
	{
		"fips": 36029,
		"state": "NY",
		"area_name": "Erie County",
		"bachelorsOrHigher": 31.2
	},
	{
		"fips": 36031,
		"state": "NY",
		"area_name": "Essex County",
		"bachelorsOrHigher": 23.8
	},
	{
		"fips": 36033,
		"state": "NY",
		"area_name": "Franklin County",
		"bachelorsOrHigher": 17.7
	},
	{
		"fips": 36035,
		"state": "NY",
		"area_name": "Fulton County",
		"bachelorsOrHigher": 15.7
	},
	{
		"fips": 36037,
		"state": "NY",
		"area_name": "Genesee County",
		"bachelorsOrHigher": 20.2
	},
	{
		"fips": 36039,
		"state": "NY",
		"area_name": "Greene County",
		"bachelorsOrHigher": 20.1
	},
	{
		"fips": 36041,
		"state": "NY",
		"area_name": "Hamilton County",
		"bachelorsOrHigher": 23.8
	},
	{
		"fips": 36043,
		"state": "NY",
		"area_name": "Herkimer County",
		"bachelorsOrHigher": 21.3
	},
	{
		"fips": 36045,
		"state": "NY",
		"area_name": "Jefferson County",
		"bachelorsOrHigher": 20.5
	},
	{
		"fips": 36047,
		"state": "NY",
		"area_name": "Kings County",
		"bachelorsOrHigher": 31.6
	},
	{
		"fips": 36049,
		"state": "NY",
		"area_name": "Lewis County",
		"bachelorsOrHigher": 14.2
	},
	{
		"fips": 36051,
		"state": "NY",
		"area_name": "Livingston County",
		"bachelorsOrHigher": 23.9
	},
	{
		"fips": 36053,
		"state": "NY",
		"area_name": "Madison County",
		"bachelorsOrHigher": 27.2
	},
	{
		"fips": 36055,
		"state": "NY",
		"area_name": "Monroe County",
		"bachelorsOrHigher": 35.9
	},
	{
		"fips": 36057,
		"state": "NY",
		"area_name": "Montgomery County",
		"bachelorsOrHigher": 16.3
	},
	{
		"fips": 36059,
		"state": "NY",
		"area_name": "Nassau County",
		"bachelorsOrHigher": 42.3
	},
	{
		"fips": 36061,
		"state": "NY",
		"area_name": "New York County",
		"bachelorsOrHigher": 59.3
	},
	{
		"fips": 36063,
		"state": "NY",
		"area_name": "Niagara County",
		"bachelorsOrHigher": 22.9
	},
	{
		"fips": 36065,
		"state": "NY",
		"area_name": "Oneida County",
		"bachelorsOrHigher": 23.1
	},
	{
		"fips": 36067,
		"state": "NY",
		"area_name": "Onondaga County",
		"bachelorsOrHigher": 33.5
	},
	{
		"fips": 36069,
		"state": "NY",
		"area_name": "Ontario County",
		"bachelorsOrHigher": 31.6
	},
	{
		"fips": 36071,
		"state": "NY",
		"area_name": "Orange County",
		"bachelorsOrHigher": 28.6
	},
	{
		"fips": 36073,
		"state": "NY",
		"area_name": "Orleans County",
		"bachelorsOrHigher": 16.2
	},
	{
		"fips": 36075,
		"state": "NY",
		"area_name": "Oswego County",
		"bachelorsOrHigher": 17.7
	},
	{
		"fips": 36077,
		"state": "NY",
		"area_name": "Otsego County",
		"bachelorsOrHigher": 27.2
	},
	{
		"fips": 36079,
		"state": "NY",
		"area_name": "Putnam County",
		"bachelorsOrHigher": 38.2
	},
	{
		"fips": 36081,
		"state": "NY",
		"area_name": "Queens County",
		"bachelorsOrHigher": 30.2
	},
	{
		"fips": 36083,
		"state": "NY",
		"area_name": "Rensselaer County",
		"bachelorsOrHigher": 28.5
	},
	{
		"fips": 36085,
		"state": "NY",
		"area_name": "Richmond County",
		"bachelorsOrHigher": 30.6
	},
	{
		"fips": 36087,
		"state": "NY",
		"area_name": "Rockland County",
		"bachelorsOrHigher": 40.7
	},
	{
		"fips": 36089,
		"state": "NY",
		"area_name": "St. Lawrence County",
		"bachelorsOrHigher": 21.6
	},
	{
		"fips": 36091,
		"state": "NY",
		"area_name": "Saratoga County",
		"bachelorsOrHigher": 38
	},
	{
		"fips": 36093,
		"state": "NY",
		"area_name": "Schenectady County",
		"bachelorsOrHigher": 29.8
	},
	{
		"fips": 36095,
		"state": "NY",
		"area_name": "Schoharie County",
		"bachelorsOrHigher": 19.1
	},
	{
		"fips": 36097,
		"state": "NY",
		"area_name": "Schuyler County",
		"bachelorsOrHigher": 18
	},
	{
		"fips": 36099,
		"state": "NY",
		"area_name": "Seneca County",
		"bachelorsOrHigher": 19.6
	},
	{
		"fips": 36101,
		"state": "NY",
		"area_name": "Steuben County",
		"bachelorsOrHigher": 20.8
	},
	{
		"fips": 36103,
		"state": "NY",
		"area_name": "Suffolk County",
		"bachelorsOrHigher": 33.5
	},
	{
		"fips": 36105,
		"state": "NY",
		"area_name": "Sullivan County",
		"bachelorsOrHigher": 21.1
	},
	{
		"fips": 36107,
		"state": "NY",
		"area_name": "Tioga County",
		"bachelorsOrHigher": 23.8
	},
	{
		"fips": 36109,
		"state": "NY",
		"area_name": "Tompkins County",
		"bachelorsOrHigher": 50.3
	},
	{
		"fips": 36111,
		"state": "NY",
		"area_name": "Ulster County",
		"bachelorsOrHigher": 30.1
	},
	{
		"fips": 36113,
		"state": "NY",
		"area_name": "Warren County",
		"bachelorsOrHigher": 28.3
	},
	{
		"fips": 36115,
		"state": "NY",
		"area_name": "Washington County",
		"bachelorsOrHigher": 18.5
	},
	{
		"fips": 36117,
		"state": "NY",
		"area_name": "Wayne County",
		"bachelorsOrHigher": 21.3
	},
	{
		"fips": 36119,
		"state": "NY",
		"area_name": "Westchester County",
		"bachelorsOrHigher": 46
	},
	{
		"fips": 36121,
		"state": "NY",
		"area_name": "Wyoming County",
		"bachelorsOrHigher": 14.7
	},
	{
		"fips": 36123,
		"state": "NY",
		"area_name": "Yates County",
		"bachelorsOrHigher": 24.3
	},
	{
		"fips": 37001,
		"state": "NC",
		"area_name": "Alamance County",
		"bachelorsOrHigher": 21
	},
	{
		"fips": 37003,
		"state": "NC",
		"area_name": "Alexander County",
		"bachelorsOrHigher": 13
	},
	{
		"fips": 37005,
		"state": "NC",
		"area_name": "Alleghany County",
		"bachelorsOrHigher": 17.4
	},
	{
		"fips": 37007,
		"state": "NC",
		"area_name": "Anson County",
		"bachelorsOrHigher": 10.7
	},
	{
		"fips": 37009,
		"state": "NC",
		"area_name": "Ashe County",
		"bachelorsOrHigher": 18.6
	},
	{
		"fips": 37011,
		"state": "NC",
		"area_name": "Avery County",
		"bachelorsOrHigher": 20.1
	},
	{
		"fips": 37013,
		"state": "NC",
		"area_name": "Beaufort County",
		"bachelorsOrHigher": 17.8
	},
	{
		"fips": 37015,
		"state": "NC",
		"area_name": "Bertie County",
		"bachelorsOrHigher": 11.1
	},
	{
		"fips": 37017,
		"state": "NC",
		"area_name": "Bladen County",
		"bachelorsOrHigher": 11.5
	},
	{
		"fips": 37019,
		"state": "NC",
		"area_name": "Brunswick County",
		"bachelorsOrHigher": 25.4
	},
	{
		"fips": 37021,
		"state": "NC",
		"area_name": "Buncombe County",
		"bachelorsOrHigher": 35.1
	},
	{
		"fips": 37023,
		"state": "NC",
		"area_name": "Burke County",
		"bachelorsOrHigher": 17.4
	},
	{
		"fips": 37025,
		"state": "NC",
		"area_name": "Cabarrus County",
		"bachelorsOrHigher": 26.2
	},
	{
		"fips": 37027,
		"state": "NC",
		"area_name": "Caldwell County",
		"bachelorsOrHigher": 13.4
	},
	{
		"fips": 37029,
		"state": "NC",
		"area_name": "Camden County",
		"bachelorsOrHigher": 19.3
	},
	{
		"fips": 37031,
		"state": "NC",
		"area_name": "Carteret County",
		"bachelorsOrHigher": 24.2
	},
	{
		"fips": 37033,
		"state": "NC",
		"area_name": "Caswell County",
		"bachelorsOrHigher": 10.7
	},
	{
		"fips": 37035,
		"state": "NC",
		"area_name": "Catawba County",
		"bachelorsOrHigher": 21.5
	},
	{
		"fips": 37037,
		"state": "NC",
		"area_name": "Chatham County",
		"bachelorsOrHigher": 36.2
	},
	{
		"fips": 37039,
		"state": "NC",
		"area_name": "Cherokee County",
		"bachelorsOrHigher": 18.4
	},
	{
		"fips": 37041,
		"state": "NC",
		"area_name": "Chowan County",
		"bachelorsOrHigher": 20.9
	},
	{
		"fips": 37043,
		"state": "NC",
		"area_name": "Clay County",
		"bachelorsOrHigher": 20.1
	},
	{
		"fips": 37045,
		"state": "NC",
		"area_name": "Cleveland County",
		"bachelorsOrHigher": 16.5
	},
	{
		"fips": 37047,
		"state": "NC",
		"area_name": "Columbus County",
		"bachelorsOrHigher": 12.7
	},
	{
		"fips": 37049,
		"state": "NC",
		"area_name": "Craven County",
		"bachelorsOrHigher": 21.6
	},
	{
		"fips": 37051,
		"state": "NC",
		"area_name": "Cumberland County",
		"bachelorsOrHigher": 22.9
	},
	{
		"fips": 37053,
		"state": "NC",
		"area_name": "Currituck County",
		"bachelorsOrHigher": 19.2
	},
	{
		"fips": 37055,
		"state": "NC",
		"area_name": "Dare County",
		"bachelorsOrHigher": 29.4
	},
	{
		"fips": 37057,
		"state": "NC",
		"area_name": "Davidson County",
		"bachelorsOrHigher": 17.9
	},
	{
		"fips": 37059,
		"state": "NC",
		"area_name": "Davie County",
		"bachelorsOrHigher": 25.6
	},
	{
		"fips": 37061,
		"state": "NC",
		"area_name": "Duplin County",
		"bachelorsOrHigher": 10.4
	},
	{
		"fips": 37063,
		"state": "NC",
		"area_name": "Durham County",
		"bachelorsOrHigher": 45.6
	},
	{
		"fips": 37065,
		"state": "NC",
		"area_name": "Edgecombe County",
		"bachelorsOrHigher": 10.7
	},
	{
		"fips": 37067,
		"state": "NC",
		"area_name": "Forsyth County",
		"bachelorsOrHigher": 32.1
	},
	{
		"fips": 37069,
		"state": "NC",
		"area_name": "Franklin County",
		"bachelorsOrHigher": 18.2
	},
	{
		"fips": 37071,
		"state": "NC",
		"area_name": "Gaston County",
		"bachelorsOrHigher": 18.5
	},
	{
		"fips": 37073,
		"state": "NC",
		"area_name": "Gates County",
		"bachelorsOrHigher": 12.5
	},
	{
		"fips": 37075,
		"state": "NC",
		"area_name": "Graham County",
		"bachelorsOrHigher": 16.6
	},
	{
		"fips": 37077,
		"state": "NC",
		"area_name": "Granville County",
		"bachelorsOrHigher": 17.7
	},
	{
		"fips": 37079,
		"state": "NC",
		"area_name": "Greene County",
		"bachelorsOrHigher": 9.7
	},
	{
		"fips": 37081,
		"state": "NC",
		"area_name": "Guilford County",
		"bachelorsOrHigher": 33.7
	},
	{
		"fips": 37083,
		"state": "NC",
		"area_name": "Halifax County",
		"bachelorsOrHigher": 11.9
	},
	{
		"fips": 37085,
		"state": "NC",
		"area_name": "Harnett County",
		"bachelorsOrHigher": 18.9
	},
	{
		"fips": 37087,
		"state": "NC",
		"area_name": "Haywood County",
		"bachelorsOrHigher": 23.8
	},
	{
		"fips": 37089,
		"state": "NC",
		"area_name": "Henderson County",
		"bachelorsOrHigher": 28.3
	},
	{
		"fips": 37091,
		"state": "NC",
		"area_name": "Hertford County",
		"bachelorsOrHigher": 14.3
	},
	{
		"fips": 37093,
		"state": "NC",
		"area_name": "Hoke County",
		"bachelorsOrHigher": 18.4
	},
	{
		"fips": 37095,
		"state": "NC",
		"area_name": "Hyde County",
		"bachelorsOrHigher": 11.2
	},
	{
		"fips": 37097,
		"state": "NC",
		"area_name": "Iredell County",
		"bachelorsOrHigher": 25.1
	},
	{
		"fips": 37099,
		"state": "NC",
		"area_name": "Jackson County",
		"bachelorsOrHigher": 29.3
	},
	{
		"fips": 37101,
		"state": "NC",
		"area_name": "Johnston County",
		"bachelorsOrHigher": 20
	},
	{
		"fips": 37103,
		"state": "NC",
		"area_name": "Jones County",
		"bachelorsOrHigher": 13.7
	},
	{
		"fips": 37105,
		"state": "NC",
		"area_name": "Lee County",
		"bachelorsOrHigher": 20.2
	},
	{
		"fips": 37107,
		"state": "NC",
		"area_name": "Lenoir County",
		"bachelorsOrHigher": 13.9
	},
	{
		"fips": 37109,
		"state": "NC",
		"area_name": "Lincoln County",
		"bachelorsOrHigher": 19.9
	},
	{
		"fips": 37111,
		"state": "NC",
		"area_name": "McDowell County",
		"bachelorsOrHigher": 13.9
	},
	{
		"fips": 37113,
		"state": "NC",
		"area_name": "Macon County",
		"bachelorsOrHigher": 22.4
	},
	{
		"fips": 37115,
		"state": "NC",
		"area_name": "Madison County",
		"bachelorsOrHigher": 20.3
	},
	{
		"fips": 37117,
		"state": "NC",
		"area_name": "Martin County",
		"bachelorsOrHigher": 12.9
	},
	{
		"fips": 37119,
		"state": "NC",
		"area_name": "Mecklenburg County",
		"bachelorsOrHigher": 41.5
	},
	{
		"fips": 37121,
		"state": "NC",
		"area_name": "Mitchell County",
		"bachelorsOrHigher": 16.4
	},
	{
		"fips": 37123,
		"state": "NC",
		"area_name": "Montgomery County",
		"bachelorsOrHigher": 14.9
	},
	{
		"fips": 37125,
		"state": "NC",
		"area_name": "Moore County",
		"bachelorsOrHigher": 32
	},
	{
		"fips": 37127,
		"state": "NC",
		"area_name": "Nash County",
		"bachelorsOrHigher": 18.4
	},
	{
		"fips": 37129,
		"state": "NC",
		"area_name": "New Hanover County",
		"bachelorsOrHigher": 37.2
	},
	{
		"fips": 37131,
		"state": "NC",
		"area_name": "Northampton County",
		"bachelorsOrHigher": 11.1
	},
	{
		"fips": 37133,
		"state": "NC",
		"area_name": "Onslow County",
		"bachelorsOrHigher": 18.4
	},
	{
		"fips": 37135,
		"state": "NC",
		"area_name": "Orange County",
		"bachelorsOrHigher": 56.2
	},
	{
		"fips": 37137,
		"state": "NC",
		"area_name": "Pamlico County",
		"bachelorsOrHigher": 19.9
	},
	{
		"fips": 37139,
		"state": "NC",
		"area_name": "Pasquotank County",
		"bachelorsOrHigher": 18.9
	},
	{
		"fips": 37141,
		"state": "NC",
		"area_name": "Pender County",
		"bachelorsOrHigher": 21.6
	},
	{
		"fips": 37143,
		"state": "NC",
		"area_name": "Perquimans County",
		"bachelorsOrHigher": 16.7
	},
	{
		"fips": 37145,
		"state": "NC",
		"area_name": "Person County",
		"bachelorsOrHigher": 14
	},
	{
		"fips": 37147,
		"state": "NC",
		"area_name": "Pitt County",
		"bachelorsOrHigher": 28.8
	},
	{
		"fips": 37149,
		"state": "NC",
		"area_name": "Polk County",
		"bachelorsOrHigher": 30
	},
	{
		"fips": 37151,
		"state": "NC",
		"area_name": "Randolph County",
		"bachelorsOrHigher": 14.1
	},
	{
		"fips": 37153,
		"state": "NC",
		"area_name": "Richmond County",
		"bachelorsOrHigher": 13.1
	},
	{
		"fips": 37155,
		"state": "NC",
		"area_name": "Robeson County",
		"bachelorsOrHigher": 12.4
	},
	{
		"fips": 37157,
		"state": "NC",
		"area_name": "Rockingham County",
		"bachelorsOrHigher": 13.1
	},
	{
		"fips": 37159,
		"state": "NC",
		"area_name": "Rowan County",
		"bachelorsOrHigher": 17.2
	},
	{
		"fips": 37161,
		"state": "NC",
		"area_name": "Rutherford County",
		"bachelorsOrHigher": 16.4
	},
	{
		"fips": 37163,
		"state": "NC",
		"area_name": "Sampson County",
		"bachelorsOrHigher": 12.1
	},
	{
		"fips": 37165,
		"state": "NC",
		"area_name": "Scotland County",
		"bachelorsOrHigher": 15
	},
	{
		"fips": 37167,
		"state": "NC",
		"area_name": "Stanly County",
		"bachelorsOrHigher": 15.6
	},
	{
		"fips": 37169,
		"state": "NC",
		"area_name": "Stokes County",
		"bachelorsOrHigher": 13.6
	},
	{
		"fips": 37171,
		"state": "NC",
		"area_name": "Surry County",
		"bachelorsOrHigher": 15.2
	},
	{
		"fips": 37173,
		"state": "NC",
		"area_name": "Swain County",
		"bachelorsOrHigher": 15.3
	},
	{
		"fips": 37175,
		"state": "NC",
		"area_name": "Transylvania County",
		"bachelorsOrHigher": 29
	},
	{
		"fips": 37177,
		"state": "NC",
		"area_name": "Tyrrell County",
		"bachelorsOrHigher": 8
	},
	{
		"fips": 37179,
		"state": "NC",
		"area_name": "Union County",
		"bachelorsOrHigher": 32.3
	},
	{
		"fips": 37181,
		"state": "NC",
		"area_name": "Vance County",
		"bachelorsOrHigher": 12.7
	},
	{
		"fips": 37183,
		"state": "NC",
		"area_name": "Wake County",
		"bachelorsOrHigher": 48.3
	},
	{
		"fips": 37185,
		"state": "NC",
		"area_name": "Warren County",
		"bachelorsOrHigher": 15.2
	},
	{
		"fips": 37187,
		"state": "NC",
		"area_name": "Washington County",
		"bachelorsOrHigher": 9.5
	},
	{
		"fips": 37189,
		"state": "NC",
		"area_name": "Watauga County",
		"bachelorsOrHigher": 38
	},
	{
		"fips": 37191,
		"state": "NC",
		"area_name": "Wayne County",
		"bachelorsOrHigher": 17.2
	},
	{
		"fips": 37193,
		"state": "NC",
		"area_name": "Wilkes County",
		"bachelorsOrHigher": 12.9
	},
	{
		"fips": 37195,
		"state": "NC",
		"area_name": "Wilson County",
		"bachelorsOrHigher": 18.4
	},
	{
		"fips": 37197,
		"state": "NC",
		"area_name": "Yadkin County",
		"bachelorsOrHigher": 13
	},
	{
		"fips": 37199,
		"state": "NC",
		"area_name": "Yancey County",
		"bachelorsOrHigher": 18.7
	},
	{
		"fips": 38001,
		"state": "ND",
		"area_name": "Adams County",
		"bachelorsOrHigher": 23.9
	},
	{
		"fips": 38003,
		"state": "ND",
		"area_name": "Barnes County",
		"bachelorsOrHigher": 24.3
	},
	{
		"fips": 38005,
		"state": "ND",
		"area_name": "Benson County",
		"bachelorsOrHigher": 12.5
	},
	{
		"fips": 38007,
		"state": "ND",
		"area_name": "Billings County",
		"bachelorsOrHigher": 19.5
	},
	{
		"fips": 38009,
		"state": "ND",
		"area_name": "Bottineau County",
		"bachelorsOrHigher": 17.9
	},
	{
		"fips": 38011,
		"state": "ND",
		"area_name": "Bowman County",
		"bachelorsOrHigher": 20
	},
	{
		"fips": 38013,
		"state": "ND",
		"area_name": "Burke County",
		"bachelorsOrHigher": 18.5
	},
	{
		"fips": 38015,
		"state": "ND",
		"area_name": "Burleigh County",
		"bachelorsOrHigher": 33.4
	},
	{
		"fips": 38017,
		"state": "ND",
		"area_name": "Cass County",
		"bachelorsOrHigher": 37.4
	},
	{
		"fips": 38019,
		"state": "ND",
		"area_name": "Cavalier County",
		"bachelorsOrHigher": 19
	},
	{
		"fips": 38021,
		"state": "ND",
		"area_name": "Dickey County",
		"bachelorsOrHigher": 25
	},
	{
		"fips": 38023,
		"state": "ND",
		"area_name": "Divide County",
		"bachelorsOrHigher": 23.3
	},
	{
		"fips": 38025,
		"state": "ND",
		"area_name": "Dunn County",
		"bachelorsOrHigher": 19.3
	},
	{
		"fips": 38027,
		"state": "ND",
		"area_name": "Eddy County",
		"bachelorsOrHigher": 19.9
	},
	{
		"fips": 38029,
		"state": "ND",
		"area_name": "Emmons County",
		"bachelorsOrHigher": 14.8
	},
	{
		"fips": 38031,
		"state": "ND",
		"area_name": "Foster County",
		"bachelorsOrHigher": 20
	},
	{
		"fips": 38033,
		"state": "ND",
		"area_name": "Golden Valley County",
		"bachelorsOrHigher": 22.1
	},
	{
		"fips": 38035,
		"state": "ND",
		"area_name": "Grand Forks County",
		"bachelorsOrHigher": 32.6
	},
	{
		"fips": 38037,
		"state": "ND",
		"area_name": "Grant County",
		"bachelorsOrHigher": 17.2
	},
	{
		"fips": 38039,
		"state": "ND",
		"area_name": "Griggs County",
		"bachelorsOrHigher": 18.4
	},
	{
		"fips": 38041,
		"state": "ND",
		"area_name": "Hettinger County",
		"bachelorsOrHigher": 16
	},
	{
		"fips": 38043,
		"state": "ND",
		"area_name": "Kidder County",
		"bachelorsOrHigher": 19.1
	},
	{
		"fips": 38045,
		"state": "ND",
		"area_name": "LaMoure County",
		"bachelorsOrHigher": 22.1
	},
	{
		"fips": 38047,
		"state": "ND",
		"area_name": "Logan County",
		"bachelorsOrHigher": 14
	},
	{
		"fips": 38049,
		"state": "ND",
		"area_name": "McHenry County",
		"bachelorsOrHigher": 15.7
	},
	{
		"fips": 38051,
		"state": "ND",
		"area_name": "McIntosh County",
		"bachelorsOrHigher": 18.1
	},
	{
		"fips": 38053,
		"state": "ND",
		"area_name": "McKenzie County",
		"bachelorsOrHigher": 21.1
	},
	{
		"fips": 38055,
		"state": "ND",
		"area_name": "McLean County",
		"bachelorsOrHigher": 17.6
	},
	{
		"fips": 38057,
		"state": "ND",
		"area_name": "Mercer County",
		"bachelorsOrHigher": 19.8
	},
	{
		"fips": 38059,
		"state": "ND",
		"area_name": "Morton County",
		"bachelorsOrHigher": 25.3
	},
	{
		"fips": 38061,
		"state": "ND",
		"area_name": "Mountrail County",
		"bachelorsOrHigher": 18.6
	},
	{
		"fips": 38063,
		"state": "ND",
		"area_name": "Nelson County",
		"bachelorsOrHigher": 19.4
	},
	{
		"fips": 38065,
		"state": "ND",
		"area_name": "Oliver County",
		"bachelorsOrHigher": 19.6
	},
	{
		"fips": 38067,
		"state": "ND",
		"area_name": "Pembina County",
		"bachelorsOrHigher": 18.8
	},
	{
		"fips": 38069,
		"state": "ND",
		"area_name": "Pierce County",
		"bachelorsOrHigher": 15.3
	},
	{
		"fips": 38071,
		"state": "ND",
		"area_name": "Ramsey County",
		"bachelorsOrHigher": 22.8
	},
	{
		"fips": 38073,
		"state": "ND",
		"area_name": "Ransom County",
		"bachelorsOrHigher": 18.6
	},
	{
		"fips": 38075,
		"state": "ND",
		"area_name": "Renville County",
		"bachelorsOrHigher": 16.9
	},
	{
		"fips": 38077,
		"state": "ND",
		"area_name": "Richland County",
		"bachelorsOrHigher": 22.4
	},
	{
		"fips": 38079,
		"state": "ND",
		"area_name": "Rolette County",
		"bachelorsOrHigher": 20
	},
	{
		"fips": 38081,
		"state": "ND",
		"area_name": "Sargent County",
		"bachelorsOrHigher": 20.1
	},
	{
		"fips": 38083,
		"state": "ND",
		"area_name": "Sheridan County",
		"bachelorsOrHigher": 16.9
	},
	{
		"fips": 38085,
		"state": "ND",
		"area_name": "Sioux County",
		"bachelorsOrHigher": 17.4
	},
	{
		"fips": 38087,
		"state": "ND",
		"area_name": "Slope County",
		"bachelorsOrHigher": 23.6
	},
	{
		"fips": 38089,
		"state": "ND",
		"area_name": "Stark County",
		"bachelorsOrHigher": 24.3
	},
	{
		"fips": 38091,
		"state": "ND",
		"area_name": "Steele County",
		"bachelorsOrHigher": 17.4
	},
	{
		"fips": 38093,
		"state": "ND",
		"area_name": "Stutsman County",
		"bachelorsOrHigher": 22.3
	},
	{
		"fips": 38095,
		"state": "ND",
		"area_name": "Towner County",
		"bachelorsOrHigher": 18.8
	},
	{
		"fips": 38097,
		"state": "ND",
		"area_name": "Traill County",
		"bachelorsOrHigher": 27.9
	},
	{
		"fips": 38099,
		"state": "ND",
		"area_name": "Walsh County",
		"bachelorsOrHigher": 18.1
	},
	{
		"fips": 38101,
		"state": "ND",
		"area_name": "Ward County",
		"bachelorsOrHigher": 25.3
	},
	{
		"fips": 38103,
		"state": "ND",
		"area_name": "Wells County",
		"bachelorsOrHigher": 19.7
	},
	{
		"fips": 38105,
		"state": "ND",
		"area_name": "Williams County",
		"bachelorsOrHigher": 19.1
	},
	{
		"fips": 39001,
		"state": "OH",
		"area_name": "Adams County",
		"bachelorsOrHigher": 9.8
	},
	{
		"fips": 39003,
		"state": "OH",
		"area_name": "Allen County",
		"bachelorsOrHigher": 17.2
	},
	{
		"fips": 39005,
		"state": "OH",
		"area_name": "Ashland County",
		"bachelorsOrHigher": 19.7
	},
	{
		"fips": 39007,
		"state": "OH",
		"area_name": "Ashtabula County",
		"bachelorsOrHigher": 13.4
	},
	{
		"fips": 39009,
		"state": "OH",
		"area_name": "Athens County",
		"bachelorsOrHigher": 28.8
	},
	{
		"fips": 39011,
		"state": "OH",
		"area_name": "Auglaize County",
		"bachelorsOrHigher": 18.2
	},
	{
		"fips": 39013,
		"state": "OH",
		"area_name": "Belmont County",
		"bachelorsOrHigher": 14.9
	},
	{
		"fips": 39015,
		"state": "OH",
		"area_name": "Brown County",
		"bachelorsOrHigher": 11.4
	},
	{
		"fips": 39017,
		"state": "OH",
		"area_name": "Butler County",
		"bachelorsOrHigher": 28.1
	},
	{
		"fips": 39019,
		"state": "OH",
		"area_name": "Carroll County",
		"bachelorsOrHigher": 10.6
	},
	{
		"fips": 39021,
		"state": "OH",
		"area_name": "Champaign County",
		"bachelorsOrHigher": 16
	},
	{
		"fips": 39023,
		"state": "OH",
		"area_name": "Clark County",
		"bachelorsOrHigher": 18.2
	},
	{
		"fips": 39025,
		"state": "OH",
		"area_name": "Clermont County",
		"bachelorsOrHigher": 26.2
	},
	{
		"fips": 39027,
		"state": "OH",
		"area_name": "Clinton County",
		"bachelorsOrHigher": 15.2
	},
	{
		"fips": 39029,
		"state": "OH",
		"area_name": "Columbiana County",
		"bachelorsOrHigher": 13.6
	},
	{
		"fips": 39031,
		"state": "OH",
		"area_name": "Coshocton County",
		"bachelorsOrHigher": 12.1
	},
	{
		"fips": 39033,
		"state": "OH",
		"area_name": "Crawford County",
		"bachelorsOrHigher": 12.6
	},
	{
		"fips": 39035,
		"state": "OH",
		"area_name": "Cuyahoga County",
		"bachelorsOrHigher": 30.3
	},
	{
		"fips": 39037,
		"state": "OH",
		"area_name": "Darke County",
		"bachelorsOrHigher": 11.6
	},
	{
		"fips": 39039,
		"state": "OH",
		"area_name": "Defiance County",
		"bachelorsOrHigher": 16.3
	},
	{
		"fips": 39041,
		"state": "OH",
		"area_name": "Delaware County",
		"bachelorsOrHigher": 51.1
	},
	{
		"fips": 39043,
		"state": "OH",
		"area_name": "Erie County",
		"bachelorsOrHigher": 21.1
	},
	{
		"fips": 39045,
		"state": "OH",
		"area_name": "Fairfield County",
		"bachelorsOrHigher": 26.2
	},
	{
		"fips": 39047,
		"state": "OH",
		"area_name": "Fayette County",
		"bachelorsOrHigher": 13.8
	},
	{
		"fips": 39049,
		"state": "OH",
		"area_name": "Franklin County",
		"bachelorsOrHigher": 36.7
	},
	{
		"fips": 39051,
		"state": "OH",
		"area_name": "Fulton County",
		"bachelorsOrHigher": 16.7
	},
	{
		"fips": 39053,
		"state": "OH",
		"area_name": "Gallia County",
		"bachelorsOrHigher": 14.7
	},
	{
		"fips": 39055,
		"state": "OH",
		"area_name": "Geauga County",
		"bachelorsOrHigher": 36
	},
	{
		"fips": 39057,
		"state": "OH",
		"area_name": "Greene County",
		"bachelorsOrHigher": 36.9
	},
	{
		"fips": 39059,
		"state": "OH",
		"area_name": "Guernsey County",
		"bachelorsOrHigher": 13.2
	},
	{
		"fips": 39061,
		"state": "OH",
		"area_name": "Hamilton County",
		"bachelorsOrHigher": 34.3
	},
	{
		"fips": 39063,
		"state": "OH",
		"area_name": "Hancock County",
		"bachelorsOrHigher": 24.9
	},
	{
		"fips": 39065,
		"state": "OH",
		"area_name": "Hardin County",
		"bachelorsOrHigher": 14.5
	},
	{
		"fips": 39067,
		"state": "OH",
		"area_name": "Harrison County",
		"bachelorsOrHigher": 9.5
	},
	{
		"fips": 39069,
		"state": "OH",
		"area_name": "Henry County",
		"bachelorsOrHigher": 14.8
	},
	{
		"fips": 39071,
		"state": "OH",
		"area_name": "Highland County",
		"bachelorsOrHigher": 11.2
	},
	{
		"fips": 39073,
		"state": "OH",
		"area_name": "Hocking County",
		"bachelorsOrHigher": 13.7
	},
	{
		"fips": 39075,
		"state": "OH",
		"area_name": "Holmes County",
		"bachelorsOrHigher": 7.8
	},
	{
		"fips": 39077,
		"state": "OH",
		"area_name": "Huron County",
		"bachelorsOrHigher": 13.1
	},
	{
		"fips": 39079,
		"state": "OH",
		"area_name": "Jackson County",
		"bachelorsOrHigher": 17.3
	},
	{
		"fips": 39081,
		"state": "OH",
		"area_name": "Jefferson County",
		"bachelorsOrHigher": 15.2
	},
	{
		"fips": 39083,
		"state": "OH",
		"area_name": "Knox County",
		"bachelorsOrHigher": 21.4
	},
	{
		"fips": 39085,
		"state": "OH",
		"area_name": "Lake County",
		"bachelorsOrHigher": 26
	},
	{
		"fips": 39087,
		"state": "OH",
		"area_name": "Lawrence County",
		"bachelorsOrHigher": 14.8
	},
	{
		"fips": 39089,
		"state": "OH",
		"area_name": "Licking County",
		"bachelorsOrHigher": 22.6
	},
	{
		"fips": 39091,
		"state": "OH",
		"area_name": "Logan County",
		"bachelorsOrHigher": 14.8
	},
	{
		"fips": 39093,
		"state": "OH",
		"area_name": "Lorain County",
		"bachelorsOrHigher": 22.3
	},
	{
		"fips": 39095,
		"state": "OH",
		"area_name": "Lucas County",
		"bachelorsOrHigher": 24.2
	},
	{
		"fips": 39097,
		"state": "OH",
		"area_name": "Madison County",
		"bachelorsOrHigher": 15.7
	},
	{
		"fips": 39099,
		"state": "OH",
		"area_name": "Mahoning County",
		"bachelorsOrHigher": 21.5
	},
	{
		"fips": 39101,
		"state": "OH",
		"area_name": "Marion County",
		"bachelorsOrHigher": 12.5
	},
	{
		"fips": 39103,
		"state": "OH",
		"area_name": "Medina County",
		"bachelorsOrHigher": 29.9
	},
	{
		"fips": 39105,
		"state": "OH",
		"area_name": "Meigs County",
		"bachelorsOrHigher": 11.9
	},
	{
		"fips": 39107,
		"state": "OH",
		"area_name": "Mercer County",
		"bachelorsOrHigher": 15.9
	},
	{
		"fips": 39109,
		"state": "OH",
		"area_name": "Miami County",
		"bachelorsOrHigher": 19.7
	},
	{
		"fips": 39111,
		"state": "OH",
		"area_name": "Monroe County",
		"bachelorsOrHigher": 10.3
	},
	{
		"fips": 39113,
		"state": "OH",
		"area_name": "Montgomery County",
		"bachelorsOrHigher": 24.8
	},
	{
		"fips": 39115,
		"state": "OH",
		"area_name": "Morgan County",
		"bachelorsOrHigher": 10.7
	},
	{
		"fips": 39117,
		"state": "OH",
		"area_name": "Morrow County",
		"bachelorsOrHigher": 13.8
	},
	{
		"fips": 39119,
		"state": "OH",
		"area_name": "Muskingum County",
		"bachelorsOrHigher": 14.6
	},
	{
		"fips": 39121,
		"state": "OH",
		"area_name": "Noble County",
		"bachelorsOrHigher": 9.5
	},
	{
		"fips": 39123,
		"state": "OH",
		"area_name": "Ottawa County",
		"bachelorsOrHigher": 21.4
	},
	{
		"fips": 39125,
		"state": "OH",
		"area_name": "Paulding County",
		"bachelorsOrHigher": 12.7
	},
	{
		"fips": 39127,
		"state": "OH",
		"area_name": "Perry County",
		"bachelorsOrHigher": 11
	},
	{
		"fips": 39129,
		"state": "OH",
		"area_name": "Pickaway County",
		"bachelorsOrHigher": 16.4
	},
	{
		"fips": 39131,
		"state": "OH",
		"area_name": "Pike County",
		"bachelorsOrHigher": 11.4
	},
	{
		"fips": 39133,
		"state": "OH",
		"area_name": "Portage County",
		"bachelorsOrHigher": 25.5
	},
	{
		"fips": 39135,
		"state": "OH",
		"area_name": "Preble County",
		"bachelorsOrHigher": 12.2
	},
	{
		"fips": 39137,
		"state": "OH",
		"area_name": "Putnam County",
		"bachelorsOrHigher": 20.2
	},
	{
		"fips": 39139,
		"state": "OH",
		"area_name": "Richland County",
		"bachelorsOrHigher": 15.9
	},
	{
		"fips": 39141,
		"state": "OH",
		"area_name": "Ross County",
		"bachelorsOrHigher": 15
	},
	{
		"fips": 39143,
		"state": "OH",
		"area_name": "Sandusky County",
		"bachelorsOrHigher": 14.1
	},
	{
		"fips": 39145,
		"state": "OH",
		"area_name": "Scioto County",
		"bachelorsOrHigher": 14.4
	},
	{
		"fips": 39147,
		"state": "OH",
		"area_name": "Seneca County",
		"bachelorsOrHigher": 14.7
	},
	{
		"fips": 39149,
		"state": "OH",
		"area_name": "Shelby County",
		"bachelorsOrHigher": 15.6
	},
	{
		"fips": 39151,
		"state": "OH",
		"area_name": "Stark County",
		"bachelorsOrHigher": 21.5
	},
	{
		"fips": 39153,
		"state": "OH",
		"area_name": "Summit County",
		"bachelorsOrHigher": 29.9
	},
	{
		"fips": 39155,
		"state": "OH",
		"area_name": "Trumbull County",
		"bachelorsOrHigher": 17.4
	},
	{
		"fips": 39157,
		"state": "OH",
		"area_name": "Tuscarawas County",
		"bachelorsOrHigher": 14.7
	},
	{
		"fips": 39159,
		"state": "OH",
		"area_name": "Union County",
		"bachelorsOrHigher": 26
	},
	{
		"fips": 39161,
		"state": "OH",
		"area_name": "Van Wert County",
		"bachelorsOrHigher": 15.4
	},
	{
		"fips": 39163,
		"state": "OH",
		"area_name": "Vinton County",
		"bachelorsOrHigher": 8.7
	},
	{
		"fips": 39165,
		"state": "OH",
		"area_name": "Warren County",
		"bachelorsOrHigher": 38.7
	},
	{
		"fips": 39167,
		"state": "OH",
		"area_name": "Washington County",
		"bachelorsOrHigher": 16.6
	},
	{
		"fips": 39169,
		"state": "OH",
		"area_name": "Wayne County",
		"bachelorsOrHigher": 20.2
	},
	{
		"fips": 39171,
		"state": "OH",
		"area_name": "Williams County",
		"bachelorsOrHigher": 13.7
	},
	{
		"fips": 39173,
		"state": "OH",
		"area_name": "Wood County",
		"bachelorsOrHigher": 30.8
	},
	{
		"fips": 39175,
		"state": "OH",
		"area_name": "Wyandot County",
		"bachelorsOrHigher": 13
	},
	{
		"fips": 40001,
		"state": "OK",
		"area_name": "Adair County",
		"bachelorsOrHigher": 12.9
	},
	{
		"fips": 40003,
		"state": "OK",
		"area_name": "Alfalfa County",
		"bachelorsOrHigher": 20.3
	},
	{
		"fips": 40005,
		"state": "OK",
		"area_name": "Atoka County",
		"bachelorsOrHigher": 13.1
	},
	{
		"fips": 40007,
		"state": "OK",
		"area_name": "Beaver County",
		"bachelorsOrHigher": 17.9
	},
	{
		"fips": 40009,
		"state": "OK",
		"area_name": "Beckham County",
		"bachelorsOrHigher": 16.9
	},
	{
		"fips": 40011,
		"state": "OK",
		"area_name": "Blaine County",
		"bachelorsOrHigher": 16.7
	},
	{
		"fips": 40013,
		"state": "OK",
		"area_name": "Bryan County",
		"bachelorsOrHigher": 20.7
	},
	{
		"fips": 40015,
		"state": "OK",
		"area_name": "Caddo County",
		"bachelorsOrHigher": 15
	},
	{
		"fips": 40017,
		"state": "OK",
		"area_name": "Canadian County",
		"bachelorsOrHigher": 25.4
	},
	{
		"fips": 40019,
		"state": "OK",
		"area_name": "Carter County",
		"bachelorsOrHigher": 18.2
	},
	{
		"fips": 40021,
		"state": "OK",
		"area_name": "Cherokee County",
		"bachelorsOrHigher": 23.9
	},
	{
		"fips": 40023,
		"state": "OK",
		"area_name": "Choctaw County",
		"bachelorsOrHigher": 14.2
	},
	{
		"fips": 40025,
		"state": "OK",
		"area_name": "Cimarron County",
		"bachelorsOrHigher": 17.5
	},
	{
		"fips": 40027,
		"state": "OK",
		"area_name": "Cleveland County",
		"bachelorsOrHigher": 31
	},
	{
		"fips": 40029,
		"state": "OK",
		"area_name": "Coal County",
		"bachelorsOrHigher": 13
	},
	{
		"fips": 40031,
		"state": "OK",
		"area_name": "Comanche County",
		"bachelorsOrHigher": 20.4
	},
	{
		"fips": 40033,
		"state": "OK",
		"area_name": "Cotton County",
		"bachelorsOrHigher": 16
	},
	{
		"fips": 40035,
		"state": "OK",
		"area_name": "Craig County",
		"bachelorsOrHigher": 13.9
	},
	{
		"fips": 40037,
		"state": "OK",
		"area_name": "Creek County",
		"bachelorsOrHigher": 15
	},
	{
		"fips": 40039,
		"state": "OK",
		"area_name": "Custer County",
		"bachelorsOrHigher": 27.3
	},
	{
		"fips": 40041,
		"state": "OK",
		"area_name": "Delaware County",
		"bachelorsOrHigher": 16.4
	},
	{
		"fips": 40043,
		"state": "OK",
		"area_name": "Dewey County",
		"bachelorsOrHigher": 22.6
	},
	{
		"fips": 40045,
		"state": "OK",
		"area_name": "Ellis County",
		"bachelorsOrHigher": 24.9
	},
	{
		"fips": 40047,
		"state": "OK",
		"area_name": "Garfield County",
		"bachelorsOrHigher": 21.5
	},
	{
		"fips": 40049,
		"state": "OK",
		"area_name": "Garvin County",
		"bachelorsOrHigher": 15
	},
	{
		"fips": 40051,
		"state": "OK",
		"area_name": "Grady County",
		"bachelorsOrHigher": 17.2
	},
	{
		"fips": 40053,
		"state": "OK",
		"area_name": "Grant County",
		"bachelorsOrHigher": 22.1
	},
	{
		"fips": 40055,
		"state": "OK",
		"area_name": "Greer County",
		"bachelorsOrHigher": 13.2
	},
	{
		"fips": 40057,
		"state": "OK",
		"area_name": "Harmon County",
		"bachelorsOrHigher": 20.5
	},
	{
		"fips": 40059,
		"state": "OK",
		"area_name": "Harper County",
		"bachelorsOrHigher": 17.9
	},
	{
		"fips": 40061,
		"state": "OK",
		"area_name": "Haskell County",
		"bachelorsOrHigher": 11.4
	},
	{
		"fips": 40063,
		"state": "OK",
		"area_name": "Hughes County",
		"bachelorsOrHigher": 11.1
	},
	{
		"fips": 40065,
		"state": "OK",
		"area_name": "Jackson County",
		"bachelorsOrHigher": 19.8
	},
	{
		"fips": 40067,
		"state": "OK",
		"area_name": "Jefferson County",
		"bachelorsOrHigher": 11.4
	},
	{
		"fips": 40069,
		"state": "OK",
		"area_name": "Johnston County",
		"bachelorsOrHigher": 17.9
	},
	{
		"fips": 40071,
		"state": "OK",
		"area_name": "Kay County",
		"bachelorsOrHigher": 19.7
	},
	{
		"fips": 40073,
		"state": "OK",
		"area_name": "Kingfisher County",
		"bachelorsOrHigher": 19.4
	},
	{
		"fips": 40075,
		"state": "OK",
		"area_name": "Kiowa County",
		"bachelorsOrHigher": 18.5
	},
	{
		"fips": 40077,
		"state": "OK",
		"area_name": "Latimer County",
		"bachelorsOrHigher": 14.1
	},
	{
		"fips": 40079,
		"state": "OK",
		"area_name": "Le Flore County",
		"bachelorsOrHigher": 12.9
	},
	{
		"fips": 40081,
		"state": "OK",
		"area_name": "Lincoln County",
		"bachelorsOrHigher": 13.1
	},
	{
		"fips": 40083,
		"state": "OK",
		"area_name": "Logan County",
		"bachelorsOrHigher": 26.5
	},
	{
		"fips": 40085,
		"state": "OK",
		"area_name": "Love County",
		"bachelorsOrHigher": 16.1
	},
	{
		"fips": 40087,
		"state": "OK",
		"area_name": "McClain County",
		"bachelorsOrHigher": 21.5
	},
	{
		"fips": 40089,
		"state": "OK",
		"area_name": "McCurtain County",
		"bachelorsOrHigher": 14.2
	},
	{
		"fips": 40091,
		"state": "OK",
		"area_name": "McIntosh County",
		"bachelorsOrHigher": 13.5
	},
	{
		"fips": 40093,
		"state": "OK",
		"area_name": "Major County",
		"bachelorsOrHigher": 16.2
	},
	{
		"fips": 40095,
		"state": "OK",
		"area_name": "Marshall County",
		"bachelorsOrHigher": 14.2
	},
	{
		"fips": 40097,
		"state": "OK",
		"area_name": "Mayes County",
		"bachelorsOrHigher": 15.9
	},
	{
		"fips": 40099,
		"state": "OK",
		"area_name": "Murray County",
		"bachelorsOrHigher": 20.2
	},
	{
		"fips": 40101,
		"state": "OK",
		"area_name": "Muskogee County",
		"bachelorsOrHigher": 18.7
	},
	{
		"fips": 40103,
		"state": "OK",
		"area_name": "Noble County",
		"bachelorsOrHigher": 21.3
	},
	{
		"fips": 40105,
		"state": "OK",
		"area_name": "Nowata County",
		"bachelorsOrHigher": 13.1
	},
	{
		"fips": 40107,
		"state": "OK",
		"area_name": "Okfuskee County",
		"bachelorsOrHigher": 10.5
	},
	{
		"fips": 40109,
		"state": "OK",
		"area_name": "Oklahoma County",
		"bachelorsOrHigher": 30.2
	},
	{
		"fips": 40111,
		"state": "OK",
		"area_name": "Okmulgee County",
		"bachelorsOrHigher": 14.5
	},
	{
		"fips": 40113,
		"state": "OK",
		"area_name": "Osage County",
		"bachelorsOrHigher": 16.2
	},
	{
		"fips": 40115,
		"state": "OK",
		"area_name": "Ottawa County",
		"bachelorsOrHigher": 13.8
	},
	{
		"fips": 40117,
		"state": "OK",
		"area_name": "Pawnee County",
		"bachelorsOrHigher": 16.5
	},
	{
		"fips": 40119,
		"state": "OK",
		"area_name": "Payne County",
		"bachelorsOrHigher": 36.4
	},
	{
		"fips": 40121,
		"state": "OK",
		"area_name": "Pittsburg County",
		"bachelorsOrHigher": 15.6
	},
	{
		"fips": 40123,
		"state": "OK",
		"area_name": "Pontotoc County",
		"bachelorsOrHigher": 27.1
	},
	{
		"fips": 40125,
		"state": "OK",
		"area_name": "Pottawatomie County",
		"bachelorsOrHigher": 18
	},
	{
		"fips": 40127,
		"state": "OK",
		"area_name": "Pushmataha County",
		"bachelorsOrHigher": 12.2
	},
	{
		"fips": 40129,
		"state": "OK",
		"area_name": "Roger Mills County",
		"bachelorsOrHigher": 21.2
	},
	{
		"fips": 40131,
		"state": "OK",
		"area_name": "Rogers County",
		"bachelorsOrHigher": 23.1
	},
	{
		"fips": 40133,
		"state": "OK",
		"area_name": "Seminole County",
		"bachelorsOrHigher": 13.4
	},
	{
		"fips": 40135,
		"state": "OK",
		"area_name": "Sequoyah County",
		"bachelorsOrHigher": 13.1
	},
	{
		"fips": 40137,
		"state": "OK",
		"area_name": "Stephens County",
		"bachelorsOrHigher": 17.5
	},
	{
		"fips": 40139,
		"state": "OK",
		"area_name": "Texas County",
		"bachelorsOrHigher": 19.5
	},
	{
		"fips": 40141,
		"state": "OK",
		"area_name": "Tillman County",
		"bachelorsOrHigher": 16.1
	},
	{
		"fips": 40143,
		"state": "OK",
		"area_name": "Tulsa County",
		"bachelorsOrHigher": 30
	},
	{
		"fips": 40145,
		"state": "OK",
		"area_name": "Wagoner County",
		"bachelorsOrHigher": 21.5
	},
	{
		"fips": 40147,
		"state": "OK",
		"area_name": "Washington County",
		"bachelorsOrHigher": 26.1
	},
	{
		"fips": 40149,
		"state": "OK",
		"area_name": "Washita County",
		"bachelorsOrHigher": 17.6
	},
	{
		"fips": 40151,
		"state": "OK",
		"area_name": "Woods County",
		"bachelorsOrHigher": 25.7
	},
	{
		"fips": 40153,
		"state": "OK",
		"area_name": "Woodward County",
		"bachelorsOrHigher": 18.8
	},
	{
		"fips": 41001,
		"state": "OR",
		"area_name": "Baker County",
		"bachelorsOrHigher": 20.4
	},
	{
		"fips": 41003,
		"state": "OR",
		"area_name": "Benton County",
		"bachelorsOrHigher": 51.4
	},
	{
		"fips": 41005,
		"state": "OR",
		"area_name": "Clackamas County",
		"bachelorsOrHigher": 32
	},
	{
		"fips": 41007,
		"state": "OR",
		"area_name": "Clatsop County",
		"bachelorsOrHigher": 23.6
	},
	{
		"fips": 41009,
		"state": "OR",
		"area_name": "Columbia County",
		"bachelorsOrHigher": 17.1
	},
	{
		"fips": 41011,
		"state": "OR",
		"area_name": "Coos County",
		"bachelorsOrHigher": 18.8
	},
	{
		"fips": 41013,
		"state": "OR",
		"area_name": "Crook County",
		"bachelorsOrHigher": 14.7
	},
	{
		"fips": 41015,
		"state": "OR",
		"area_name": "Curry County",
		"bachelorsOrHigher": 22.2
	},
	{
		"fips": 41017,
		"state": "OR",
		"area_name": "Deschutes County",
		"bachelorsOrHigher": 31.3
	},
	{
		"fips": 41019,
		"state": "OR",
		"area_name": "Douglas County",
		"bachelorsOrHigher": 15.9
	},
	{
		"fips": 41021,
		"state": "OR",
		"area_name": "Gilliam County",
		"bachelorsOrHigher": 18.8
	},
	{
		"fips": 41023,
		"state": "OR",
		"area_name": "Grant County",
		"bachelorsOrHigher": 19.5
	},
	{
		"fips": 41025,
		"state": "OR",
		"area_name": "Harney County",
		"bachelorsOrHigher": 16.9
	},
	{
		"fips": 41027,
		"state": "OR",
		"area_name": "Hood River County",
		"bachelorsOrHigher": 32
	},
	{
		"fips": 41029,
		"state": "OR",
		"area_name": "Jackson County",
		"bachelorsOrHigher": 25.1
	},
	{
		"fips": 41031,
		"state": "OR",
		"area_name": "Jefferson County",
		"bachelorsOrHigher": 16
	},
	{
		"fips": 41033,
		"state": "OR",
		"area_name": "Josephine County",
		"bachelorsOrHigher": 17.3
	},
	{
		"fips": 41035,
		"state": "OR",
		"area_name": "Klamath County",
		"bachelorsOrHigher": 19.6
	},
	{
		"fips": 41037,
		"state": "OR",
		"area_name": "Lake County",
		"bachelorsOrHigher": 18.3
	},
	{
		"fips": 41039,
		"state": "OR",
		"area_name": "Lane County",
		"bachelorsOrHigher": 28.2
	},
	{
		"fips": 41041,
		"state": "OR",
		"area_name": "Lincoln County",
		"bachelorsOrHigher": 24.3
	},
	{
		"fips": 41043,
		"state": "OR",
		"area_name": "Linn County",
		"bachelorsOrHigher": 17.5
	},
	{
		"fips": 41045,
		"state": "OR",
		"area_name": "Malheur County",
		"bachelorsOrHigher": 13.7
	},
	{
		"fips": 41047,
		"state": "OR",
		"area_name": "Marion County",
		"bachelorsOrHigher": 21.7
	},
	{
		"fips": 41049,
		"state": "OR",
		"area_name": "Morrow County",
		"bachelorsOrHigher": 10.2
	},
	{
		"fips": 41051,
		"state": "OR",
		"area_name": "Multnomah County",
		"bachelorsOrHigher": 40.3
	},
	{
		"fips": 41053,
		"state": "OR",
		"area_name": "Polk County",
		"bachelorsOrHigher": 28.9
	},
	{
		"fips": 41055,
		"state": "OR",
		"area_name": "Sherman County",
		"bachelorsOrHigher": 18.5
	},
	{
		"fips": 41057,
		"state": "OR",
		"area_name": "Tillamook County",
		"bachelorsOrHigher": 19.5
	},
	{
		"fips": 41059,
		"state": "OR",
		"area_name": "Umatilla County",
		"bachelorsOrHigher": 15.8
	},
	{
		"fips": 41061,
		"state": "OR",
		"area_name": "Union County",
		"bachelorsOrHigher": 22.7
	},
	{
		"fips": 41063,
		"state": "OR",
		"area_name": "Wallowa County",
		"bachelorsOrHigher": 25.1
	},
	{
		"fips": 41065,
		"state": "OR",
		"area_name": "Wasco County",
		"bachelorsOrHigher": 18.7
	},
	{
		"fips": 41067,
		"state": "OR",
		"area_name": "Washington County",
		"bachelorsOrHigher": 39.7
	},
	{
		"fips": 41069,
		"state": "OR",
		"area_name": "Wheeler County",
		"bachelorsOrHigher": 16.1
	},
	{
		"fips": 41071,
		"state": "OR",
		"area_name": "Yamhill County",
		"bachelorsOrHigher": 22.4
	},
	{
		"fips": 42001,
		"state": "PA",
		"area_name": "Adams County",
		"bachelorsOrHigher": 21.2
	},
	{
		"fips": 42003,
		"state": "PA",
		"area_name": "Allegheny County",
		"bachelorsOrHigher": 36.9
	},
	{
		"fips": 42005,
		"state": "PA",
		"area_name": "Armstrong County",
		"bachelorsOrHigher": 14.6
	},
	{
		"fips": 42007,
		"state": "PA",
		"area_name": "Beaver County",
		"bachelorsOrHigher": 22.6
	},
	{
		"fips": 42009,
		"state": "PA",
		"area_name": "Bedford County",
		"bachelorsOrHigher": 13.7
	},
	{
		"fips": 42011,
		"state": "PA",
		"area_name": "Berks County",
		"bachelorsOrHigher": 22.7
	},
	{
		"fips": 42013,
		"state": "PA",
		"area_name": "Blair County",
		"bachelorsOrHigher": 18.6
	},
	{
		"fips": 42015,
		"state": "PA",
		"area_name": "Bradford County",
		"bachelorsOrHigher": 17
	},
	{
		"fips": 42017,
		"state": "PA",
		"area_name": "Bucks County",
		"bachelorsOrHigher": 36.5
	},
	{
		"fips": 42019,
		"state": "PA",
		"area_name": "Butler County",
		"bachelorsOrHigher": 31.7
	},
	{
		"fips": 42021,
		"state": "PA",
		"area_name": "Cambria County",
		"bachelorsOrHigher": 18.9
	},
	{
		"fips": 42023,
		"state": "PA",
		"area_name": "Cameron County",
		"bachelorsOrHigher": 14.6
	},
	{
		"fips": 42025,
		"state": "PA",
		"area_name": "Carbon County",
		"bachelorsOrHigher": 15
	},
	{
		"fips": 42027,
		"state": "PA",
		"area_name": "Centre County",
		"bachelorsOrHigher": 40.4
	},
	{
		"fips": 42029,
		"state": "PA",
		"area_name": "Chester County",
		"bachelorsOrHigher": 48.8
	},
	{
		"fips": 42031,
		"state": "PA",
		"area_name": "Clarion County",
		"bachelorsOrHigher": 19.3
	},
	{
		"fips": 42033,
		"state": "PA",
		"area_name": "Clearfield County",
		"bachelorsOrHigher": 13.2
	},
	{
		"fips": 42035,
		"state": "PA",
		"area_name": "Clinton County",
		"bachelorsOrHigher": 17.2
	},
	{
		"fips": 42037,
		"state": "PA",
		"area_name": "Columbia County",
		"bachelorsOrHigher": 21.2
	},
	{
		"fips": 42039,
		"state": "PA",
		"area_name": "Crawford County",
		"bachelorsOrHigher": 19.6
	},
	{
		"fips": 42041,
		"state": "PA",
		"area_name": "Cumberland County",
		"bachelorsOrHigher": 32.8
	},
	{
		"fips": 42043,
		"state": "PA",
		"area_name": "Dauphin County",
		"bachelorsOrHigher": 28.2
	},
	{
		"fips": 42045,
		"state": "PA",
		"area_name": "Delaware County",
		"bachelorsOrHigher": 35.5
	},
	{
		"fips": 42047,
		"state": "PA",
		"area_name": "Elk County",
		"bachelorsOrHigher": 15.4
	},
	{
		"fips": 42049,
		"state": "PA",
		"area_name": "Erie County",
		"bachelorsOrHigher": 25.6
	},
	{
		"fips": 42051,
		"state": "PA",
		"area_name": "Fayette County",
		"bachelorsOrHigher": 13.9
	},
	{
		"fips": 42053,
		"state": "PA",
		"area_name": "Forest County",
		"bachelorsOrHigher": 9.2
	},
	{
		"fips": 42055,
		"state": "PA",
		"area_name": "Franklin County",
		"bachelorsOrHigher": 19.1
	},
	{
		"fips": 42057,
		"state": "PA",
		"area_name": "Fulton County",
		"bachelorsOrHigher": 12.7
	},
	{
		"fips": 42059,
		"state": "PA",
		"area_name": "Greene County",
		"bachelorsOrHigher": 17
	},
	{
		"fips": 42061,
		"state": "PA",
		"area_name": "Huntingdon County",
		"bachelorsOrHigher": 14.3
	},
	{
		"fips": 42063,
		"state": "PA",
		"area_name": "Indiana County",
		"bachelorsOrHigher": 23.3
	},
	{
		"fips": 42065,
		"state": "PA",
		"area_name": "Jefferson County",
		"bachelorsOrHigher": 14.3
	},
	{
		"fips": 42067,
		"state": "PA",
		"area_name": "Juniata County",
		"bachelorsOrHigher": 12.2
	},
	{
		"fips": 42069,
		"state": "PA",
		"area_name": "Lackawanna County",
		"bachelorsOrHigher": 25.7
	},
	{
		"fips": 42071,
		"state": "PA",
		"area_name": "Lancaster County",
		"bachelorsOrHigher": 24.7
	},
	{
		"fips": 42073,
		"state": "PA",
		"area_name": "Lawrence County",
		"bachelorsOrHigher": 19.4
	},
	{
		"fips": 42075,
		"state": "PA",
		"area_name": "Lebanon County",
		"bachelorsOrHigher": 19.8
	},
	{
		"fips": 42077,
		"state": "PA",
		"area_name": "Lehigh County",
		"bachelorsOrHigher": 28.1
	},
	{
		"fips": 42079,
		"state": "PA",
		"area_name": "Luzerne County",
		"bachelorsOrHigher": 21.4
	},
	{
		"fips": 42081,
		"state": "PA",
		"area_name": "Lycoming County",
		"bachelorsOrHigher": 19.4
	},
	{
		"fips": 42083,
		"state": "PA",
		"area_name": "McKean County",
		"bachelorsOrHigher": 15.6
	},
	{
		"fips": 42085,
		"state": "PA",
		"area_name": "Mercer County",
		"bachelorsOrHigher": 20.6
	},
	{
		"fips": 42087,
		"state": "PA",
		"area_name": "Mifflin County",
		"bachelorsOrHigher": 11.9
	},
	{
		"fips": 42089,
		"state": "PA",
		"area_name": "Monroe County",
		"bachelorsOrHigher": 23.2
	},
	{
		"fips": 42091,
		"state": "PA",
		"area_name": "Montgomery County",
		"bachelorsOrHigher": 46.2
	},
	{
		"fips": 42093,
		"state": "PA",
		"area_name": "Montour County",
		"bachelorsOrHigher": 28.3
	},
	{
		"fips": 42095,
		"state": "PA",
		"area_name": "Northampton County",
		"bachelorsOrHigher": 27.2
	},
	{
		"fips": 42097,
		"state": "PA",
		"area_name": "Northumberland County",
		"bachelorsOrHigher": 14.3
	},
	{
		"fips": 42099,
		"state": "PA",
		"area_name": "Perry County",
		"bachelorsOrHigher": 16.1
	},
	{
		"fips": 42101,
		"state": "PA",
		"area_name": "Philadelphia County",
		"bachelorsOrHigher": 24.5
	},
	{
		"fips": 42103,
		"state": "PA",
		"area_name": "Pike County",
		"bachelorsOrHigher": 22.9
	},
	{
		"fips": 42105,
		"state": "PA",
		"area_name": "Potter County",
		"bachelorsOrHigher": 15.4
	},
	{
		"fips": 42107,
		"state": "PA",
		"area_name": "Schuylkill County",
		"bachelorsOrHigher": 14.9
	},
	{
		"fips": 42109,
		"state": "PA",
		"area_name": "Snyder County",
		"bachelorsOrHigher": 16.6
	},
	{
		"fips": 42111,
		"state": "PA",
		"area_name": "Somerset County",
		"bachelorsOrHigher": 14.9
	},
	{
		"fips": 42113,
		"state": "PA",
		"area_name": "Sullivan County",
		"bachelorsOrHigher": 15.6
	},
	{
		"fips": 42115,
		"state": "PA",
		"area_name": "Susquehanna County",
		"bachelorsOrHigher": 16.7
	},
	{
		"fips": 42117,
		"state": "PA",
		"area_name": "Tioga County",
		"bachelorsOrHigher": 19.4
	},
	{
		"fips": 42119,
		"state": "PA",
		"area_name": "Union County",
		"bachelorsOrHigher": 21.3
	},
	{
		"fips": 42121,
		"state": "PA",
		"area_name": "Venango County",
		"bachelorsOrHigher": 15.9
	},
	{
		"fips": 42123,
		"state": "PA",
		"area_name": "Warren County",
		"bachelorsOrHigher": 18.4
	},
	{
		"fips": 42125,
		"state": "PA",
		"area_name": "Washington County",
		"bachelorsOrHigher": 26.6
	},
	{
		"fips": 42127,
		"state": "PA",
		"area_name": "Wayne County",
		"bachelorsOrHigher": 19.6
	},
	{
		"fips": 42129,
		"state": "PA",
		"area_name": "Westmoreland County",
		"bachelorsOrHigher": 26.2
	},
	{
		"fips": 42131,
		"state": "PA",
		"area_name": "Wyoming County",
		"bachelorsOrHigher": 17.9
	},
	{
		"fips": 42133,
		"state": "PA",
		"area_name": "York County",
		"bachelorsOrHigher": 22.5
	},
	{
		"fips": 44001,
		"state": "RI",
		"area_name": "Bristol County",
		"bachelorsOrHigher": 43.5
	},
	{
		"fips": 44003,
		"state": "RI",
		"area_name": "Kent County",
		"bachelorsOrHigher": 30.1
	},
	{
		"fips": 44005,
		"state": "RI",
		"area_name": "Newport County",
		"bachelorsOrHigher": 44.9
	},
	{
		"fips": 44007,
		"state": "RI",
		"area_name": "Providence County",
		"bachelorsOrHigher": 26.4
	},
	{
		"fips": 44009,
		"state": "RI",
		"area_name": "Washington County",
		"bachelorsOrHigher": 43.8
	},
	{
		"fips": 45001,
		"state": "SC",
		"area_name": "Abbeville County",
		"bachelorsOrHigher": 12.3
	},
	{
		"fips": 45003,
		"state": "SC",
		"area_name": "Aiken County",
		"bachelorsOrHigher": 24.8
	},
	{
		"fips": 45005,
		"state": "SC",
		"area_name": "Allendale County",
		"bachelorsOrHigher": 12.7
	},
	{
		"fips": 45007,
		"state": "SC",
		"area_name": "Anderson County",
		"bachelorsOrHigher": 19.2
	},
	{
		"fips": 45009,
		"state": "SC",
		"area_name": "Bamberg County",
		"bachelorsOrHigher": 18.3
	},
	{
		"fips": 45011,
		"state": "SC",
		"area_name": "Barnwell County",
		"bachelorsOrHigher": 11.7
	},
	{
		"fips": 45013,
		"state": "SC",
		"area_name": "Beaufort County",
		"bachelorsOrHigher": 37.4
	},
	{
		"fips": 45015,
		"state": "SC",
		"area_name": "Berkeley County",
		"bachelorsOrHigher": 21.6
	},
	{
		"fips": 45017,
		"state": "SC",
		"area_name": "Calhoun County",
		"bachelorsOrHigher": 16.8
	},
	{
		"fips": 45019,
		"state": "SC",
		"area_name": "Charleston County",
		"bachelorsOrHigher": 40
	},
	{
		"fips": 45021,
		"state": "SC",
		"area_name": "Cherokee County",
		"bachelorsOrHigher": 14.7
	},
	{
		"fips": 45023,
		"state": "SC",
		"area_name": "Chester County",
		"bachelorsOrHigher": 13
	},
	{
		"fips": 45025,
		"state": "SC",
		"area_name": "Chesterfield County",
		"bachelorsOrHigher": 12.4
	},
	{
		"fips": 45027,
		"state": "SC",
		"area_name": "Clarendon County",
		"bachelorsOrHigher": 13.6
	},
	{
		"fips": 45029,
		"state": "SC",
		"area_name": "Colleton County",
		"bachelorsOrHigher": 14.1
	},
	{
		"fips": 45031,
		"state": "SC",
		"area_name": "Darlington County",
		"bachelorsOrHigher": 16.1
	},
	{
		"fips": 45033,
		"state": "SC",
		"area_name": "Dillon County",
		"bachelorsOrHigher": 8.3
	},
	{
		"fips": 45035,
		"state": "SC",
		"area_name": "Dorchester County",
		"bachelorsOrHigher": 24.9
	},
	{
		"fips": 45037,
		"state": "SC",
		"area_name": "Edgefield County",
		"bachelorsOrHigher": 18.6
	},
	{
		"fips": 45039,
		"state": "SC",
		"area_name": "Fairfield County",
		"bachelorsOrHigher": 15.2
	},
	{
		"fips": 45041,
		"state": "SC",
		"area_name": "Florence County",
		"bachelorsOrHigher": 21.5
	},
	{
		"fips": 45043,
		"state": "SC",
		"area_name": "Georgetown County",
		"bachelorsOrHigher": 23.8
	},
	{
		"fips": 45045,
		"state": "SC",
		"area_name": "Greenville County",
		"bachelorsOrHigher": 31.6
	},
	{
		"fips": 45047,
		"state": "SC",
		"area_name": "Greenwood County",
		"bachelorsOrHigher": 23
	},
	{
		"fips": 45049,
		"state": "SC",
		"area_name": "Hampton County",
		"bachelorsOrHigher": 11.1
	},
	{
		"fips": 45051,
		"state": "SC",
		"area_name": "Horry County",
		"bachelorsOrHigher": 22.9
	},
	{
		"fips": 45053,
		"state": "SC",
		"area_name": "Jasper County",
		"bachelorsOrHigher": 13
	},
	{
		"fips": 45055,
		"state": "SC",
		"area_name": "Kershaw County",
		"bachelorsOrHigher": 20
	},
	{
		"fips": 45057,
		"state": "SC",
		"area_name": "Lancaster County",
		"bachelorsOrHigher": 20.3
	},
	{
		"fips": 45059,
		"state": "SC",
		"area_name": "Laurens County",
		"bachelorsOrHigher": 14.3
	},
	{
		"fips": 45061,
		"state": "SC",
		"area_name": "Lee County",
		"bachelorsOrHigher": 9.7
	},
	{
		"fips": 45063,
		"state": "SC",
		"area_name": "Lexington County",
		"bachelorsOrHigher": 28.7
	},
	{
		"fips": 45065,
		"state": "SC",
		"area_name": "McCormick County",
		"bachelorsOrHigher": 17.7
	},
	{
		"fips": 45067,
		"state": "SC",
		"area_name": "Marion County",
		"bachelorsOrHigher": 15
	},
	{
		"fips": 45069,
		"state": "SC",
		"area_name": "Marlboro County",
		"bachelorsOrHigher": 9
	},
	{
		"fips": 45071,
		"state": "SC",
		"area_name": "Newberry County",
		"bachelorsOrHigher": 17.8
	},
	{
		"fips": 45073,
		"state": "SC",
		"area_name": "Oconee County",
		"bachelorsOrHigher": 22.1
	},
	{
		"fips": 45075,
		"state": "SC",
		"area_name": "Orangeburg County",
		"bachelorsOrHigher": 18.8
	},
	{
		"fips": 45077,
		"state": "SC",
		"area_name": "Pickens County",
		"bachelorsOrHigher": 22.4
	},
	{
		"fips": 45079,
		"state": "SC",
		"area_name": "Richland County",
		"bachelorsOrHigher": 36.2
	},
	{
		"fips": 45081,
		"state": "SC",
		"area_name": "Saluda County",
		"bachelorsOrHigher": 12.2
	},
	{
		"fips": 45083,
		"state": "SC",
		"area_name": "Spartanburg County",
		"bachelorsOrHigher": 21.9
	},
	{
		"fips": 45085,
		"state": "SC",
		"area_name": "Sumter County",
		"bachelorsOrHigher": 18.9
	},
	{
		"fips": 45087,
		"state": "SC",
		"area_name": "Union County",
		"bachelorsOrHigher": 13.6
	},
	{
		"fips": 45089,
		"state": "SC",
		"area_name": "Williamsburg County",
		"bachelorsOrHigher": 12
	},
	{
		"fips": 45091,
		"state": "SC",
		"area_name": "York County",
		"bachelorsOrHigher": 28.6
	},
	{
		"fips": 46003,
		"state": "SD",
		"area_name": "Aurora County",
		"bachelorsOrHigher": 18.5
	},
	{
		"fips": 46005,
		"state": "SD",
		"area_name": "Beadle County",
		"bachelorsOrHigher": 20.3
	},
	{
		"fips": 46007,
		"state": "SD",
		"area_name": "Bennett County",
		"bachelorsOrHigher": 16.5
	},
	{
		"fips": 46009,
		"state": "SD",
		"area_name": "Bon Homme County",
		"bachelorsOrHigher": 17.6
	},
	{
		"fips": 46011,
		"state": "SD",
		"area_name": "Brookings County",
		"bachelorsOrHigher": 41.4
	},
	{
		"fips": 46013,
		"state": "SD",
		"area_name": "Brown County",
		"bachelorsOrHigher": 26.9
	},
	{
		"fips": 46015,
		"state": "SD",
		"area_name": "Brule County",
		"bachelorsOrHigher": 21.4
	},
	{
		"fips": 46017,
		"state": "SD",
		"area_name": "Buffalo County",
		"bachelorsOrHigher": 8.6
	},
	{
		"fips": 46019,
		"state": "SD",
		"area_name": "Butte County",
		"bachelorsOrHigher": 18.2
	},
	{
		"fips": 46021,
		"state": "SD",
		"area_name": "Campbell County",
		"bachelorsOrHigher": 19.3
	},
	{
		"fips": 46023,
		"state": "SD",
		"area_name": "Charles Mix County",
		"bachelorsOrHigher": 18
	},
	{
		"fips": 46025,
		"state": "SD",
		"area_name": "Clark County",
		"bachelorsOrHigher": 20.2
	},
	{
		"fips": 46027,
		"state": "SD",
		"area_name": "Clay County",
		"bachelorsOrHigher": 43.1
	},
	{
		"fips": 46029,
		"state": "SD",
		"area_name": "Codington County",
		"bachelorsOrHigher": 20.3
	},
	{
		"fips": 46031,
		"state": "SD",
		"area_name": "Corson County",
		"bachelorsOrHigher": 14.1
	},
	{
		"fips": 46033,
		"state": "SD",
		"area_name": "Custer County",
		"bachelorsOrHigher": 27.4
	},
	{
		"fips": 46035,
		"state": "SD",
		"area_name": "Davison County",
		"bachelorsOrHigher": 26.4
	},
	{
		"fips": 46037,
		"state": "SD",
		"area_name": "Day County",
		"bachelorsOrHigher": 17.8
	},
	{
		"fips": 46039,
		"state": "SD",
		"area_name": "Deuel County",
		"bachelorsOrHigher": 22.1
	},
	{
		"fips": 46041,
		"state": "SD",
		"area_name": "Dewey County",
		"bachelorsOrHigher": 14.9
	},
	{
		"fips": 46043,
		"state": "SD",
		"area_name": "Douglas County",
		"bachelorsOrHigher": 18.1
	},
	{
		"fips": 46045,
		"state": "SD",
		"area_name": "Edmunds County",
		"bachelorsOrHigher": 23.6
	},
	{
		"fips": 46047,
		"state": "SD",
		"area_name": "Fall River County",
		"bachelorsOrHigher": 21.6
	},
	{
		"fips": 46049,
		"state": "SD",
		"area_name": "Faulk County",
		"bachelorsOrHigher": 20.6
	},
	{
		"fips": 46051,
		"state": "SD",
		"area_name": "Grant County",
		"bachelorsOrHigher": 17.2
	},
	{
		"fips": 46053,
		"state": "SD",
		"area_name": "Gregory County",
		"bachelorsOrHigher": 17.5
	},
	{
		"fips": 46055,
		"state": "SD",
		"area_name": "Haakon County",
		"bachelorsOrHigher": 18.6
	},
	{
		"fips": 46057,
		"state": "SD",
		"area_name": "Hamlin County",
		"bachelorsOrHigher": 19.3
	},
	{
		"fips": 46059,
		"state": "SD",
		"area_name": "Hand County",
		"bachelorsOrHigher": 20.2
	},
	{
		"fips": 46061,
		"state": "SD",
		"area_name": "Hanson County",
		"bachelorsOrHigher": 24.8
	},
	{
		"fips": 46063,
		"state": "SD",
		"area_name": "Harding County",
		"bachelorsOrHigher": 30.5
	},
	{
		"fips": 46065,
		"state": "SD",
		"area_name": "Hughes County",
		"bachelorsOrHigher": 32.1
	},
	{
		"fips": 46067,
		"state": "SD",
		"area_name": "Hutchinson County",
		"bachelorsOrHigher": 26.1
	},
	{
		"fips": 46069,
		"state": "SD",
		"area_name": "Hyde County",
		"bachelorsOrHigher": 17.6
	},
	{
		"fips": 46071,
		"state": "SD",
		"area_name": "Jackson County",
		"bachelorsOrHigher": 20.2
	},
	{
		"fips": 46073,
		"state": "SD",
		"area_name": "Jerauld County",
		"bachelorsOrHigher": 16.7
	},
	{
		"fips": 46075,
		"state": "SD",
		"area_name": "Jones County",
		"bachelorsOrHigher": 17.3
	},
	{
		"fips": 46077,
		"state": "SD",
		"area_name": "Kingsbury County",
		"bachelorsOrHigher": 23.2
	},
	{
		"fips": 46079,
		"state": "SD",
		"area_name": "Lake County",
		"bachelorsOrHigher": 28.4
	},
	{
		"fips": 46081,
		"state": "SD",
		"area_name": "Lawrence County",
		"bachelorsOrHigher": 29.5
	},
	{
		"fips": 46083,
		"state": "SD",
		"area_name": "Lincoln County",
		"bachelorsOrHigher": 41
	},
	{
		"fips": 46085,
		"state": "SD",
		"area_name": "Lyman County",
		"bachelorsOrHigher": 19.1
	},
	{
		"fips": 46087,
		"state": "SD",
		"area_name": "McCook County",
		"bachelorsOrHigher": 22.6
	},
	{
		"fips": 46089,
		"state": "SD",
		"area_name": "McPherson County",
		"bachelorsOrHigher": 16.9
	},
	{
		"fips": 46091,
		"state": "SD",
		"area_name": "Marshall County",
		"bachelorsOrHigher": 21.1
	},
	{
		"fips": 46093,
		"state": "SD",
		"area_name": "Meade County",
		"bachelorsOrHigher": 21.5
	},
	{
		"fips": 46095,
		"state": "SD",
		"area_name": "Mellette County",
		"bachelorsOrHigher": 17.5
	},
	{
		"fips": 46097,
		"state": "SD",
		"area_name": "Miner County",
		"bachelorsOrHigher": 24.5
	},
	{
		"fips": 46099,
		"state": "SD",
		"area_name": "Minnehaha County",
		"bachelorsOrHigher": 29.3
	},
	{
		"fips": 46101,
		"state": "SD",
		"area_name": "Moody County",
		"bachelorsOrHigher": 25.6
	},
	{
		"fips": 46103,
		"state": "SD",
		"area_name": "Pennington County",
		"bachelorsOrHigher": 27.9
	},
	{
		"fips": 46105,
		"state": "SD",
		"area_name": "Perkins County",
		"bachelorsOrHigher": 18.8
	},
	{
		"fips": 46107,
		"state": "SD",
		"area_name": "Potter County",
		"bachelorsOrHigher": 20
	},
	{
		"fips": 46109,
		"state": "SD",
		"area_name": "Roberts County",
		"bachelorsOrHigher": 15.8
	},
	{
		"fips": 46111,
		"state": "SD",
		"area_name": "Sanborn County",
		"bachelorsOrHigher": 16.1
	},
	{
		"fips": 46102,
		"state": "SD",
		"area_name": "Oglala Lakota County",
		"bachelorsOrHigher": 12.5
	},
	{
		"fips": 46115,
		"state": "SD",
		"area_name": "Spink County",
		"bachelorsOrHigher": 22
	},
	{
		"fips": 46117,
		"state": "SD",
		"area_name": "Stanley County",
		"bachelorsOrHigher": 26.8
	},
	{
		"fips": 46119,
		"state": "SD",
		"area_name": "Sully County",
		"bachelorsOrHigher": 26.3
	},
	{
		"fips": 46121,
		"state": "SD",
		"area_name": "Todd County",
		"bachelorsOrHigher": 13.9
	},
	{
		"fips": 46123,
		"state": "SD",
		"area_name": "Tripp County",
		"bachelorsOrHigher": 21.8
	},
	{
		"fips": 46125,
		"state": "SD",
		"area_name": "Turner County",
		"bachelorsOrHigher": 19.9
	},
	{
		"fips": 46127,
		"state": "SD",
		"area_name": "Union County",
		"bachelorsOrHigher": 32.7
	},
	{
		"fips": 46129,
		"state": "SD",
		"area_name": "Walworth County",
		"bachelorsOrHigher": 22.5
	},
	{
		"fips": 46135,
		"state": "SD",
		"area_name": "Yankton County",
		"bachelorsOrHigher": 26.7
	},
	{
		"fips": 46137,
		"state": "SD",
		"area_name": "Ziebach County",
		"bachelorsOrHigher": 13.1
	},
	{
		"fips": 47001,
		"state": "TN",
		"area_name": "Anderson County",
		"bachelorsOrHigher": 23.6
	},
	{
		"fips": 47003,
		"state": "TN",
		"area_name": "Bedford County",
		"bachelorsOrHigher": 13.3
	},
	{
		"fips": 47005,
		"state": "TN",
		"area_name": "Benton County",
		"bachelorsOrHigher": 10
	},
	{
		"fips": 47007,
		"state": "TN",
		"area_name": "Bledsoe County",
		"bachelorsOrHigher": 10.2
	},
	{
		"fips": 47009,
		"state": "TN",
		"area_name": "Blount County",
		"bachelorsOrHigher": 21.7
	},
	{
		"fips": 47011,
		"state": "TN",
		"area_name": "Bradley County",
		"bachelorsOrHigher": 19.3
	},
	{
		"fips": 47013,
		"state": "TN",
		"area_name": "Campbell County",
		"bachelorsOrHigher": 9.5
	},
	{
		"fips": 47015,
		"state": "TN",
		"area_name": "Cannon County",
		"bachelorsOrHigher": 12.8
	},
	{
		"fips": 47017,
		"state": "TN",
		"area_name": "Carroll County",
		"bachelorsOrHigher": 15.6
	},
	{
		"fips": 47019,
		"state": "TN",
		"area_name": "Carter County",
		"bachelorsOrHigher": 16.1
	},
	{
		"fips": 47021,
		"state": "TN",
		"area_name": "Cheatham County",
		"bachelorsOrHigher": 19.3
	},
	{
		"fips": 47023,
		"state": "TN",
		"area_name": "Chester County",
		"bachelorsOrHigher": 15.6
	},
	{
		"fips": 47025,
		"state": "TN",
		"area_name": "Claiborne County",
		"bachelorsOrHigher": 12.3
	},
	{
		"fips": 47027,
		"state": "TN",
		"area_name": "Clay County",
		"bachelorsOrHigher": 13.3
	},
	{
		"fips": 47029,
		"state": "TN",
		"area_name": "Cocke County",
		"bachelorsOrHigher": 9.4
	},
	{
		"fips": 47031,
		"state": "TN",
		"area_name": "Coffee County",
		"bachelorsOrHigher": 18.2
	},
	{
		"fips": 47033,
		"state": "TN",
		"area_name": "Crockett County",
		"bachelorsOrHigher": 12
	},
	{
		"fips": 47035,
		"state": "TN",
		"area_name": "Cumberland County",
		"bachelorsOrHigher": 17.8
	},
	{
		"fips": 47037,
		"state": "TN",
		"area_name": "Davidson County",
		"bachelorsOrHigher": 36.5
	},
	{
		"fips": 47039,
		"state": "TN",
		"area_name": "Decatur County",
		"bachelorsOrHigher": 13.3
	},
	{
		"fips": 47041,
		"state": "TN",
		"area_name": "DeKalb County",
		"bachelorsOrHigher": 13.8
	},
	{
		"fips": 47043,
		"state": "TN",
		"area_name": "Dickson County",
		"bachelorsOrHigher": 13.5
	},
	{
		"fips": 47045,
		"state": "TN",
		"area_name": "Dyer County",
		"bachelorsOrHigher": 19.9
	},
	{
		"fips": 47047,
		"state": "TN",
		"area_name": "Fayette County",
		"bachelorsOrHigher": 22.7
	},
	{
		"fips": 47049,
		"state": "TN",
		"area_name": "Fentress County",
		"bachelorsOrHigher": 10.2
	},
	{
		"fips": 47051,
		"state": "TN",
		"area_name": "Franklin County",
		"bachelorsOrHigher": 18.7
	},
	{
		"fips": 47053,
		"state": "TN",
		"area_name": "Gibson County",
		"bachelorsOrHigher": 15.4
	},
	{
		"fips": 47055,
		"state": "TN",
		"area_name": "Giles County",
		"bachelorsOrHigher": 14.6
	},
	{
		"fips": 47057,
		"state": "TN",
		"area_name": "Grainger County",
		"bachelorsOrHigher": 11.1
	},
	{
		"fips": 47059,
		"state": "TN",
		"area_name": "Greene County",
		"bachelorsOrHigher": 15.5
	},
	{
		"fips": 47061,
		"state": "TN",
		"area_name": "Grundy County",
		"bachelorsOrHigher": 9.7
	},
	{
		"fips": 47063,
		"state": "TN",
		"area_name": "Hamblen County",
		"bachelorsOrHigher": 16.1
	},
	{
		"fips": 47065,
		"state": "TN",
		"area_name": "Hamilton County",
		"bachelorsOrHigher": 28.1
	},
	{
		"fips": 47067,
		"state": "TN",
		"area_name": "Hancock County",
		"bachelorsOrHigher": 10.1
	},
	{
		"fips": 47069,
		"state": "TN",
		"area_name": "Hardeman County",
		"bachelorsOrHigher": 9.2
	},
	{
		"fips": 47071,
		"state": "TN",
		"area_name": "Hardin County",
		"bachelorsOrHigher": 12.4
	},
	{
		"fips": 47073,
		"state": "TN",
		"area_name": "Hawkins County",
		"bachelorsOrHigher": 13
	},
	{
		"fips": 47075,
		"state": "TN",
		"area_name": "Haywood County",
		"bachelorsOrHigher": 12.4
	},
	{
		"fips": 47077,
		"state": "TN",
		"area_name": "Henderson County",
		"bachelorsOrHigher": 13.2
	},
	{
		"fips": 47079,
		"state": "TN",
		"area_name": "Henry County",
		"bachelorsOrHigher": 16.3
	},
	{
		"fips": 47081,
		"state": "TN",
		"area_name": "Hickman County",
		"bachelorsOrHigher": 11.2
	},
	{
		"fips": 47083,
		"state": "TN",
		"area_name": "Houston County",
		"bachelorsOrHigher": 11
	},
	{
		"fips": 47085,
		"state": "TN",
		"area_name": "Humphreys County",
		"bachelorsOrHigher": 13.6
	},
	{
		"fips": 47087,
		"state": "TN",
		"area_name": "Jackson County",
		"bachelorsOrHigher": 9.5
	},
	{
		"fips": 47089,
		"state": "TN",
		"area_name": "Jefferson County",
		"bachelorsOrHigher": 15.1
	},
	{
		"fips": 47091,
		"state": "TN",
		"area_name": "Johnson County",
		"bachelorsOrHigher": 9.3
	},
	{
		"fips": 47093,
		"state": "TN",
		"area_name": "Knox County",
		"bachelorsOrHigher": 34.5
	},
	{
		"fips": 47095,
		"state": "TN",
		"area_name": "Lake County",
		"bachelorsOrHigher": 8.2
	},
	{
		"fips": 47097,
		"state": "TN",
		"area_name": "Lauderdale County",
		"bachelorsOrHigher": 10.1
	},
	{
		"fips": 47099,
		"state": "TN",
		"area_name": "Lawrence County",
		"bachelorsOrHigher": 11.9
	},
	{
		"fips": 47101,
		"state": "TN",
		"area_name": "Lewis County",
		"bachelorsOrHigher": 12.7
	},
	{
		"fips": 47103,
		"state": "TN",
		"area_name": "Lincoln County",
		"bachelorsOrHigher": 16.3
	},
	{
		"fips": 47105,
		"state": "TN",
		"area_name": "Loudon County",
		"bachelorsOrHigher": 25.6
	},
	{
		"fips": 47107,
		"state": "TN",
		"area_name": "McMinn County",
		"bachelorsOrHigher": 14.8
	},
	{
		"fips": 47109,
		"state": "TN",
		"area_name": "McNairy County",
		"bachelorsOrHigher": 11.4
	},
	{
		"fips": 47111,
		"state": "TN",
		"area_name": "Macon County",
		"bachelorsOrHigher": 9
	},
	{
		"fips": 47113,
		"state": "TN",
		"area_name": "Madison County",
		"bachelorsOrHigher": 25.1
	},
	{
		"fips": 47115,
		"state": "TN",
		"area_name": "Marion County",
		"bachelorsOrHigher": 15.3
	},
	{
		"fips": 47117,
		"state": "TN",
		"area_name": "Marshall County",
		"bachelorsOrHigher": 13.2
	},
	{
		"fips": 47119,
		"state": "TN",
		"area_name": "Maury County",
		"bachelorsOrHigher": 18.6
	},
	{
		"fips": 47121,
		"state": "TN",
		"area_name": "Meigs County",
		"bachelorsOrHigher": 7.8
	},
	{
		"fips": 47123,
		"state": "TN",
		"area_name": "Monroe County",
		"bachelorsOrHigher": 11.2
	},
	{
		"fips": 47125,
		"state": "TN",
		"area_name": "Montgomery County",
		"bachelorsOrHigher": 24
	},
	{
		"fips": 47127,
		"state": "TN",
		"area_name": "Moore County",
		"bachelorsOrHigher": 13.9
	},
	{
		"fips": 47129,
		"state": "TN",
		"area_name": "Morgan County",
		"bachelorsOrHigher": 7.3
	},
	{
		"fips": 47131,
		"state": "TN",
		"area_name": "Obion County",
		"bachelorsOrHigher": 15.4
	},
	{
		"fips": 47133,
		"state": "TN",
		"area_name": "Overton County",
		"bachelorsOrHigher": 13.2
	},
	{
		"fips": 47135,
		"state": "TN",
		"area_name": "Perry County",
		"bachelorsOrHigher": 12.7
	},
	{
		"fips": 47137,
		"state": "TN",
		"area_name": "Pickett County",
		"bachelorsOrHigher": 12.3
	},
	{
		"fips": 47139,
		"state": "TN",
		"area_name": "Polk County",
		"bachelorsOrHigher": 10.2
	},
	{
		"fips": 47141,
		"state": "TN",
		"area_name": "Putnam County",
		"bachelorsOrHigher": 22.8
	},
	{
		"fips": 47143,
		"state": "TN",
		"area_name": "Rhea County",
		"bachelorsOrHigher": 11.7
	},
	{
		"fips": 47145,
		"state": "TN",
		"area_name": "Roane County",
		"bachelorsOrHigher": 17.7
	},
	{
		"fips": 47147,
		"state": "TN",
		"area_name": "Robertson County",
		"bachelorsOrHigher": 16.9
	},
	{
		"fips": 47149,
		"state": "TN",
		"area_name": "Rutherford County",
		"bachelorsOrHigher": 28.9
	},
	{
		"fips": 47151,
		"state": "TN",
		"area_name": "Scott County",
		"bachelorsOrHigher": 10.5
	},
	{
		"fips": 47153,
		"state": "TN",
		"area_name": "Sequatchie County",
		"bachelorsOrHigher": 13.1
	},
	{
		"fips": 47155,
		"state": "TN",
		"area_name": "Sevier County",
		"bachelorsOrHigher": 15.4
	},
	{
		"fips": 47157,
		"state": "TN",
		"area_name": "Shelby County",
		"bachelorsOrHigher": 29.8
	},
	{
		"fips": 47159,
		"state": "TN",
		"area_name": "Smith County",
		"bachelorsOrHigher": 11
	},
	{
		"fips": 47161,
		"state": "TN",
		"area_name": "Stewart County",
		"bachelorsOrHigher": 12.4
	},
	{
		"fips": 47163,
		"state": "TN",
		"area_name": "Sullivan County",
		"bachelorsOrHigher": 21.2
	},
	{
		"fips": 47165,
		"state": "TN",
		"area_name": "Sumner County",
		"bachelorsOrHigher": 24
	},
	{
		"fips": 47167,
		"state": "TN",
		"area_name": "Tipton County",
		"bachelorsOrHigher": 14.8
	},
	{
		"fips": 47169,
		"state": "TN",
		"area_name": "Trousdale County",
		"bachelorsOrHigher": 11.9
	},
	{
		"fips": 47171,
		"state": "TN",
		"area_name": "Unicoi County",
		"bachelorsOrHigher": 13.4
	},
	{
		"fips": 47173,
		"state": "TN",
		"area_name": "Union County",
		"bachelorsOrHigher": 8.6
	},
	{
		"fips": 47175,
		"state": "TN",
		"area_name": "Van Buren County",
		"bachelorsOrHigher": 12.4
	},
	{
		"fips": 47177,
		"state": "TN",
		"area_name": "Warren County",
		"bachelorsOrHigher": 13.1
	},
	{
		"fips": 47179,
		"state": "TN",
		"area_name": "Washington County",
		"bachelorsOrHigher": 30.8
	},
	{
		"fips": 47181,
		"state": "TN",
		"area_name": "Wayne County",
		"bachelorsOrHigher": 8.2
	},
	{
		"fips": 47183,
		"state": "TN",
		"area_name": "Weakley County",
		"bachelorsOrHigher": 19.5
	},
	{
		"fips": 47185,
		"state": "TN",
		"area_name": "White County",
		"bachelorsOrHigher": 11.9
	},
	{
		"fips": 47187,
		"state": "TN",
		"area_name": "Williamson County",
		"bachelorsOrHigher": 54.1
	},
	{
		"fips": 47189,
		"state": "TN",
		"area_name": "Wilson County",
		"bachelorsOrHigher": 26.7
	},
	{
		"fips": 48001,
		"state": "TX",
		"area_name": "Anderson County",
		"bachelorsOrHigher": 11.3
	},
	{
		"fips": 48003,
		"state": "TX",
		"area_name": "Andrews County",
		"bachelorsOrHigher": 13.6
	},
	{
		"fips": 48005,
		"state": "TX",
		"area_name": "Angelina County",
		"bachelorsOrHigher": 15.3
	},
	{
		"fips": 48007,
		"state": "TX",
		"area_name": "Aransas County",
		"bachelorsOrHigher": 19.5
	},
	{
		"fips": 48009,
		"state": "TX",
		"area_name": "Archer County",
		"bachelorsOrHigher": 20.3
	},
	{
		"fips": 48011,
		"state": "TX",
		"area_name": "Armstrong County",
		"bachelorsOrHigher": 24.4
	},
	{
		"fips": 48013,
		"state": "TX",
		"area_name": "Atascosa County",
		"bachelorsOrHigher": 13.6
	},
	{
		"fips": 48015,
		"state": "TX",
		"area_name": "Austin County",
		"bachelorsOrHigher": 19.5
	},
	{
		"fips": 48017,
		"state": "TX",
		"area_name": "Bailey County",
		"bachelorsOrHigher": 10.2
	},
	{
		"fips": 48019,
		"state": "TX",
		"area_name": "Bandera County",
		"bachelorsOrHigher": 21.5
	},
	{
		"fips": 48021,
		"state": "TX",
		"area_name": "Bastrop County",
		"bachelorsOrHigher": 17.3
	},
	{
		"fips": 48023,
		"state": "TX",
		"area_name": "Baylor County",
		"bachelorsOrHigher": 22.4
	},
	{
		"fips": 48025,
		"state": "TX",
		"area_name": "Bee County",
		"bachelorsOrHigher": 8.9
	},
	{
		"fips": 48027,
		"state": "TX",
		"area_name": "Bell County",
		"bachelorsOrHigher": 22.2
	},
	{
		"fips": 48029,
		"state": "TX",
		"area_name": "Bexar County",
		"bachelorsOrHigher": 26.5
	},
	{
		"fips": 48031,
		"state": "TX",
		"area_name": "Blanco County",
		"bachelorsOrHigher": 27.9
	},
	{
		"fips": 48033,
		"state": "TX",
		"area_name": "Borden County",
		"bachelorsOrHigher": 33.1
	},
	{
		"fips": 48035,
		"state": "TX",
		"area_name": "Bosque County",
		"bachelorsOrHigher": 15.4
	},
	{
		"fips": 48037,
		"state": "TX",
		"area_name": "Bowie County",
		"bachelorsOrHigher": 18.8
	},
	{
		"fips": 48039,
		"state": "TX",
		"area_name": "Brazoria County",
		"bachelorsOrHigher": 27.9
	},
	{
		"fips": 48041,
		"state": "TX",
		"area_name": "Brazos County",
		"bachelorsOrHigher": 38.3
	},
	{
		"fips": 48043,
		"state": "TX",
		"area_name": "Brewster County",
		"bachelorsOrHigher": 36.3
	},
	{
		"fips": 48045,
		"state": "TX",
		"area_name": "Briscoe County",
		"bachelorsOrHigher": 20.7
	},
	{
		"fips": 48047,
		"state": "TX",
		"area_name": "Brooks County",
		"bachelorsOrHigher": 11
	},
	{
		"fips": 48049,
		"state": "TX",
		"area_name": "Brown County",
		"bachelorsOrHigher": 16.4
	},
	{
		"fips": 48051,
		"state": "TX",
		"area_name": "Burleson County",
		"bachelorsOrHigher": 13.7
	},
	{
		"fips": 48053,
		"state": "TX",
		"area_name": "Burnet County",
		"bachelorsOrHigher": 23.3
	},
	{
		"fips": 48055,
		"state": "TX",
		"area_name": "Caldwell County",
		"bachelorsOrHigher": 15.6
	},
	{
		"fips": 48057,
		"state": "TX",
		"area_name": "Calhoun County",
		"bachelorsOrHigher": 15.8
	},
	{
		"fips": 48059,
		"state": "TX",
		"area_name": "Callahan County",
		"bachelorsOrHigher": 13.4
	},
	{
		"fips": 48061,
		"state": "TX",
		"area_name": "Cameron County",
		"bachelorsOrHigher": 16.1
	},
	{
		"fips": 48063,
		"state": "TX",
		"area_name": "Camp County",
		"bachelorsOrHigher": 14.3
	},
	{
		"fips": 48065,
		"state": "TX",
		"area_name": "Carson County",
		"bachelorsOrHigher": 22.6
	},
	{
		"fips": 48067,
		"state": "TX",
		"area_name": "Cass County",
		"bachelorsOrHigher": 12.7
	},
	{
		"fips": 48069,
		"state": "TX",
		"area_name": "Castro County",
		"bachelorsOrHigher": 13.9
	},
	{
		"fips": 48071,
		"state": "TX",
		"area_name": "Chambers County",
		"bachelorsOrHigher": 18.8
	},
	{
		"fips": 48073,
		"state": "TX",
		"area_name": "Cherokee County",
		"bachelorsOrHigher": 15.9
	},
	{
		"fips": 48075,
		"state": "TX",
		"area_name": "Childress County",
		"bachelorsOrHigher": 20
	},
	{
		"fips": 48077,
		"state": "TX",
		"area_name": "Clay County",
		"bachelorsOrHigher": 16.9
	},
	{
		"fips": 48079,
		"state": "TX",
		"area_name": "Cochran County",
		"bachelorsOrHigher": 13.7
	},
	{
		"fips": 48081,
		"state": "TX",
		"area_name": "Coke County",
		"bachelorsOrHigher": 17.1
	},
	{
		"fips": 48083,
		"state": "TX",
		"area_name": "Coleman County",
		"bachelorsOrHigher": 14
	},
	{
		"fips": 48085,
		"state": "TX",
		"area_name": "Collin County",
		"bachelorsOrHigher": 49.4
	},
	{
		"fips": 48087,
		"state": "TX",
		"area_name": "Collingsworth County",
		"bachelorsOrHigher": 18.7
	},
	{
		"fips": 48089,
		"state": "TX",
		"area_name": "Colorado County",
		"bachelorsOrHigher": 17.5
	},
	{
		"fips": 48091,
		"state": "TX",
		"area_name": "Comal County",
		"bachelorsOrHigher": 33.2
	},
	{
		"fips": 48093,
		"state": "TX",
		"area_name": "Comanche County",
		"bachelorsOrHigher": 18.3
	},
	{
		"fips": 48095,
		"state": "TX",
		"area_name": "Concho County",
		"bachelorsOrHigher": 11.8
	},
	{
		"fips": 48097,
		"state": "TX",
		"area_name": "Cooke County",
		"bachelorsOrHigher": 20.5
	},
	{
		"fips": 48099,
		"state": "TX",
		"area_name": "Coryell County",
		"bachelorsOrHigher": 15.5
	},
	{
		"fips": 48101,
		"state": "TX",
		"area_name": "Cottle County",
		"bachelorsOrHigher": 15.2
	},
	{
		"fips": 48103,
		"state": "TX",
		"area_name": "Crane County",
		"bachelorsOrHigher": 11.8
	},
	{
		"fips": 48105,
		"state": "TX",
		"area_name": "Crockett County",
		"bachelorsOrHigher": 11.1
	},
	{
		"fips": 48107,
		"state": "TX",
		"area_name": "Crosby County",
		"bachelorsOrHigher": 11.6
	},
	{
		"fips": 48109,
		"state": "TX",
		"area_name": "Culberson County",
		"bachelorsOrHigher": 11.7
	},
	{
		"fips": 48111,
		"state": "TX",
		"area_name": "Dallam County",
		"bachelorsOrHigher": 11.1
	},
	{
		"fips": 48113,
		"state": "TX",
		"area_name": "Dallas County",
		"bachelorsOrHigher": 28.7
	},
	{
		"fips": 48115,
		"state": "TX",
		"area_name": "Dawson County",
		"bachelorsOrHigher": 10.1
	},
	{
		"fips": 48117,
		"state": "TX",
		"area_name": "Deaf Smith County",
		"bachelorsOrHigher": 14.8
	},
	{
		"fips": 48119,
		"state": "TX",
		"area_name": "Delta County",
		"bachelorsOrHigher": 17
	},
	{
		"fips": 48121,
		"state": "TX",
		"area_name": "Denton County",
		"bachelorsOrHigher": 41
	},
	{
		"fips": 48123,
		"state": "TX",
		"area_name": "DeWitt County",
		"bachelorsOrHigher": 13.3
	},
	{
		"fips": 48125,
		"state": "TX",
		"area_name": "Dickens County",
		"bachelorsOrHigher": 14.4
	},
	{
		"fips": 48127,
		"state": "TX",
		"area_name": "Dimmit County",
		"bachelorsOrHigher": 10.4
	},
	{
		"fips": 48129,
		"state": "TX",
		"area_name": "Donley County",
		"bachelorsOrHigher": 16.7
	},
	{
		"fips": 48131,
		"state": "TX",
		"area_name": "Duval County",
		"bachelorsOrHigher": 7
	},
	{
		"fips": 48133,
		"state": "TX",
		"area_name": "Eastland County",
		"bachelorsOrHigher": 14
	},
	{
		"fips": 48135,
		"state": "TX",
		"area_name": "Ector County",
		"bachelorsOrHigher": 14.3
	},
	{
		"fips": 48137,
		"state": "TX",
		"area_name": "Edwards County",
		"bachelorsOrHigher": 24.3
	},
	{
		"fips": 48139,
		"state": "TX",
		"area_name": "Ellis County",
		"bachelorsOrHigher": 21.2
	},
	{
		"fips": 48141,
		"state": "TX",
		"area_name": "El Paso County",
		"bachelorsOrHigher": 20.8
	},
	{
		"fips": 48143,
		"state": "TX",
		"area_name": "Erath County",
		"bachelorsOrHigher": 25.6
	},
	{
		"fips": 48145,
		"state": "TX",
		"area_name": "Falls County",
		"bachelorsOrHigher": 11.4
	},
	{
		"fips": 48147,
		"state": "TX",
		"area_name": "Fannin County",
		"bachelorsOrHigher": 15.6
	},
	{
		"fips": 48149,
		"state": "TX",
		"area_name": "Fayette County",
		"bachelorsOrHigher": 16.1
	},
	{
		"fips": 48151,
		"state": "TX",
		"area_name": "Fisher County",
		"bachelorsOrHigher": 14.1
	},
	{
		"fips": 48153,
		"state": "TX",
		"area_name": "Floyd County",
		"bachelorsOrHigher": 17.2
	},
	{
		"fips": 48155,
		"state": "TX",
		"area_name": "Foard County",
		"bachelorsOrHigher": 20.9
	},
	{
		"fips": 48157,
		"state": "TX",
		"area_name": "Fort Bend County",
		"bachelorsOrHigher": 42.3
	},
	{
		"fips": 48159,
		"state": "TX",
		"area_name": "Franklin County",
		"bachelorsOrHigher": 22
	},
	{
		"fips": 48161,
		"state": "TX",
		"area_name": "Freestone County",
		"bachelorsOrHigher": 12.1
	},
	{
		"fips": 48163,
		"state": "TX",
		"area_name": "Frio County",
		"bachelorsOrHigher": 7.9
	},
	{
		"fips": 48165,
		"state": "TX",
		"area_name": "Gaines County",
		"bachelorsOrHigher": 11.2
	},
	{
		"fips": 48167,
		"state": "TX",
		"area_name": "Galveston County",
		"bachelorsOrHigher": 28.3
	},
	{
		"fips": 48169,
		"state": "TX",
		"area_name": "Garza County",
		"bachelorsOrHigher": 8.9
	},
	{
		"fips": 48171,
		"state": "TX",
		"area_name": "Gillespie County",
		"bachelorsOrHigher": 33.3
	},
	{
		"fips": 48173,
		"state": "TX",
		"area_name": "Glasscock County",
		"bachelorsOrHigher": 24.8
	},
	{
		"fips": 48175,
		"state": "TX",
		"area_name": "Goliad County",
		"bachelorsOrHigher": 15.3
	},
	{
		"fips": 48177,
		"state": "TX",
		"area_name": "Gonzales County",
		"bachelorsOrHigher": 14.7
	},
	{
		"fips": 48179,
		"state": "TX",
		"area_name": "Gray County",
		"bachelorsOrHigher": 14.5
	},
	{
		"fips": 48181,
		"state": "TX",
		"area_name": "Grayson County",
		"bachelorsOrHigher": 20.2
	},
	{
		"fips": 48183,
		"state": "TX",
		"area_name": "Gregg County",
		"bachelorsOrHigher": 19.9
	},
	{
		"fips": 48185,
		"state": "TX",
		"area_name": "Grimes County",
		"bachelorsOrHigher": 11.6
	},
	{
		"fips": 48187,
		"state": "TX",
		"area_name": "Guadalupe County",
		"bachelorsOrHigher": 25.2
	},
	{
		"fips": 48189,
		"state": "TX",
		"area_name": "Hale County",
		"bachelorsOrHigher": 14.3
	},
	{
		"fips": 48191,
		"state": "TX",
		"area_name": "Hall County",
		"bachelorsOrHigher": 12.4
	},
	{
		"fips": 48193,
		"state": "TX",
		"area_name": "Hamilton County",
		"bachelorsOrHigher": 19
	},
	{
		"fips": 48195,
		"state": "TX",
		"area_name": "Hansford County",
		"bachelorsOrHigher": 21.9
	},
	{
		"fips": 48197,
		"state": "TX",
		"area_name": "Hardeman County",
		"bachelorsOrHigher": 18.9
	},
	{
		"fips": 48199,
		"state": "TX",
		"area_name": "Hardin County",
		"bachelorsOrHigher": 15.4
	},
	{
		"fips": 48201,
		"state": "TX",
		"area_name": "Harris County",
		"bachelorsOrHigher": 29
	},
	{
		"fips": 48203,
		"state": "TX",
		"area_name": "Harrison County",
		"bachelorsOrHigher": 18.6
	},
	{
		"fips": 48205,
		"state": "TX",
		"area_name": "Hartley County",
		"bachelorsOrHigher": 21.4
	},
	{
		"fips": 48207,
		"state": "TX",
		"area_name": "Haskell County",
		"bachelorsOrHigher": 16.6
	},
	{
		"fips": 48209,
		"state": "TX",
		"area_name": "Hays County",
		"bachelorsOrHigher": 36.8
	},
	{
		"fips": 48211,
		"state": "TX",
		"area_name": "Hemphill County",
		"bachelorsOrHigher": 22.2
	},
	{
		"fips": 48213,
		"state": "TX",
		"area_name": "Henderson County",
		"bachelorsOrHigher": 15.5
	},
	{
		"fips": 48215,
		"state": "TX",
		"area_name": "Hidalgo County",
		"bachelorsOrHigher": 16.4
	},
	{
		"fips": 48217,
		"state": "TX",
		"area_name": "Hill County",
		"bachelorsOrHigher": 14.6
	},
	{
		"fips": 48219,
		"state": "TX",
		"area_name": "Hockley County",
		"bachelorsOrHigher": 16.1
	},
	{
		"fips": 48221,
		"state": "TX",
		"area_name": "Hood County",
		"bachelorsOrHigher": 24.1
	},
	{
		"fips": 48223,
		"state": "TX",
		"area_name": "Hopkins County",
		"bachelorsOrHigher": 15.2
	},
	{
		"fips": 48225,
		"state": "TX",
		"area_name": "Houston County",
		"bachelorsOrHigher": 13.9
	},
	{
		"fips": 48227,
		"state": "TX",
		"area_name": "Howard County",
		"bachelorsOrHigher": 13
	},
	{
		"fips": 48229,
		"state": "TX",
		"area_name": "Hudspeth County",
		"bachelorsOrHigher": 8.4
	},
	{
		"fips": 48231,
		"state": "TX",
		"area_name": "Hunt County",
		"bachelorsOrHigher": 17.4
	},
	{
		"fips": 48233,
		"state": "TX",
		"area_name": "Hutchinson County",
		"bachelorsOrHigher": 13.2
	},
	{
		"fips": 48235,
		"state": "TX",
		"area_name": "Irion County",
		"bachelorsOrHigher": 13.1
	},
	{
		"fips": 48237,
		"state": "TX",
		"area_name": "Jack County",
		"bachelorsOrHigher": 10.8
	},
	{
		"fips": 48239,
		"state": "TX",
		"area_name": "Jackson County",
		"bachelorsOrHigher": 16.5
	},
	{
		"fips": 48241,
		"state": "TX",
		"area_name": "Jasper County",
		"bachelorsOrHigher": 10.3
	},
	{
		"fips": 48243,
		"state": "TX",
		"area_name": "Jeff Davis County",
		"bachelorsOrHigher": 38.4
	},
	{
		"fips": 48245,
		"state": "TX",
		"area_name": "Jefferson County",
		"bachelorsOrHigher": 18
	},
	{
		"fips": 48247,
		"state": "TX",
		"area_name": "Jim Hogg County",
		"bachelorsOrHigher": 13
	},
	{
		"fips": 48249,
		"state": "TX",
		"area_name": "Jim Wells County",
		"bachelorsOrHigher": 10.7
	},
	{
		"fips": 48251,
		"state": "TX",
		"area_name": "Johnson County",
		"bachelorsOrHigher": 16.6
	},
	{
		"fips": 48253,
		"state": "TX",
		"area_name": "Jones County",
		"bachelorsOrHigher": 9.3
	},
	{
		"fips": 48255,
		"state": "TX",
		"area_name": "Karnes County",
		"bachelorsOrHigher": 12.4
	},
	{
		"fips": 48257,
		"state": "TX",
		"area_name": "Kaufman County",
		"bachelorsOrHigher": 18.5
	},
	{
		"fips": 48259,
		"state": "TX",
		"area_name": "Kendall County",
		"bachelorsOrHigher": 40.7
	},
	{
		"fips": 48261,
		"state": "TX",
		"area_name": "Kenedy County",
		"bachelorsOrHigher": 14.3
	},
	{
		"fips": 48263,
		"state": "TX",
		"area_name": "Kent County",
		"bachelorsOrHigher": 23.3
	},
	{
		"fips": 48265,
		"state": "TX",
		"area_name": "Kerr County",
		"bachelorsOrHigher": 28.3
	},
	{
		"fips": 48267,
		"state": "TX",
		"area_name": "Kimble County",
		"bachelorsOrHigher": 16.8
	},
	{
		"fips": 48269,
		"state": "TX",
		"area_name": "King County",
		"bachelorsOrHigher": 22.4
	},
	{
		"fips": 48271,
		"state": "TX",
		"area_name": "Kinney County",
		"bachelorsOrHigher": 13.2
	},
	{
		"fips": 48273,
		"state": "TX",
		"area_name": "Kleberg County",
		"bachelorsOrHigher": 24.4
	},
	{
		"fips": 48275,
		"state": "TX",
		"area_name": "Knox County",
		"bachelorsOrHigher": 13.2
	},
	{
		"fips": 48277,
		"state": "TX",
		"area_name": "Lamar County",
		"bachelorsOrHigher": 16.2
	},
	{
		"fips": 48279,
		"state": "TX",
		"area_name": "Lamb County",
		"bachelorsOrHigher": 14.1
	},
	{
		"fips": 48281,
		"state": "TX",
		"area_name": "Lampasas County",
		"bachelorsOrHigher": 21.1
	},
	{
		"fips": 48283,
		"state": "TX",
		"area_name": "La Salle County",
		"bachelorsOrHigher": 13.5
	},
	{
		"fips": 48285,
		"state": "TX",
		"area_name": "Lavaca County",
		"bachelorsOrHigher": 15.3
	},
	{
		"fips": 48287,
		"state": "TX",
		"area_name": "Lee County",
		"bachelorsOrHigher": 17
	},
	{
		"fips": 48289,
		"state": "TX",
		"area_name": "Leon County",
		"bachelorsOrHigher": 17
	},
	{
		"fips": 48291,
		"state": "TX",
		"area_name": "Liberty County",
		"bachelorsOrHigher": 8.8
	},
	{
		"fips": 48293,
		"state": "TX",
		"area_name": "Limestone County",
		"bachelorsOrHigher": 13.6
	},
	{
		"fips": 48295,
		"state": "TX",
		"area_name": "Lipscomb County",
		"bachelorsOrHigher": 21.1
	},
	{
		"fips": 48297,
		"state": "TX",
		"area_name": "Live Oak County",
		"bachelorsOrHigher": 15.9
	},
	{
		"fips": 48299,
		"state": "TX",
		"area_name": "Llano County",
		"bachelorsOrHigher": 26.8
	},
	{
		"fips": 48301,
		"state": "TX",
		"area_name": "Loving County",
		"bachelorsOrHigher": 2.6
	},
	{
		"fips": 48303,
		"state": "TX",
		"area_name": "Lubbock County",
		"bachelorsOrHigher": 28
	},
	{
		"fips": 48305,
		"state": "TX",
		"area_name": "Lynn County",
		"bachelorsOrHigher": 17.7
	},
	{
		"fips": 48307,
		"state": "TX",
		"area_name": "McCulloch County",
		"bachelorsOrHigher": 15.7
	},
	{
		"fips": 48309,
		"state": "TX",
		"area_name": "McLennan County",
		"bachelorsOrHigher": 22.1
	},
	{
		"fips": 48311,
		"state": "TX",
		"area_name": "McMullen County",
		"bachelorsOrHigher": 4.4
	},
	{
		"fips": 48313,
		"state": "TX",
		"area_name": "Madison County",
		"bachelorsOrHigher": 10
	},
	{
		"fips": 48315,
		"state": "TX",
		"area_name": "Marion County",
		"bachelorsOrHigher": 14.5
	},
	{
		"fips": 48317,
		"state": "TX",
		"area_name": "Martin County",
		"bachelorsOrHigher": 17.3
	},
	{
		"fips": 48319,
		"state": "TX",
		"area_name": "Mason County",
		"bachelorsOrHigher": 24.1
	},
	{
		"fips": 48321,
		"state": "TX",
		"area_name": "Matagorda County",
		"bachelorsOrHigher": 14.9
	},
	{
		"fips": 48323,
		"state": "TX",
		"area_name": "Maverick County",
		"bachelorsOrHigher": 12.1
	},
	{
		"fips": 48325,
		"state": "TX",
		"area_name": "Medina County",
		"bachelorsOrHigher": 18.8
	},
	{
		"fips": 48327,
		"state": "TX",
		"area_name": "Menard County",
		"bachelorsOrHigher": 19.2
	},
	{
		"fips": 48329,
		"state": "TX",
		"area_name": "Midland County",
		"bachelorsOrHigher": 25
	},
	{
		"fips": 48331,
		"state": "TX",
		"area_name": "Milam County",
		"bachelorsOrHigher": 16
	},
	{
		"fips": 48333,
		"state": "TX",
		"area_name": "Mills County",
		"bachelorsOrHigher": 23.9
	},
	{
		"fips": 48335,
		"state": "TX",
		"area_name": "Mitchell County",
		"bachelorsOrHigher": 9.9
	},
	{
		"fips": 48337,
		"state": "TX",
		"area_name": "Montague County",
		"bachelorsOrHigher": 16.3
	},
	{
		"fips": 48339,
		"state": "TX",
		"area_name": "Montgomery County",
		"bachelorsOrHigher": 31.7
	},
	{
		"fips": 48341,
		"state": "TX",
		"area_name": "Moore County",
		"bachelorsOrHigher": 13
	},
	{
		"fips": 48343,
		"state": "TX",
		"area_name": "Morris County",
		"bachelorsOrHigher": 12.8
	},
	{
		"fips": 48345,
		"state": "TX",
		"area_name": "Motley County",
		"bachelorsOrHigher": 19.5
	},
	{
		"fips": 48347,
		"state": "TX",
		"area_name": "Nacogdoches County",
		"bachelorsOrHigher": 25
	},
	{
		"fips": 48349,
		"state": "TX",
		"area_name": "Navarro County",
		"bachelorsOrHigher": 16.7
	},
	{
		"fips": 48351,
		"state": "TX",
		"area_name": "Newton County",
		"bachelorsOrHigher": 6.9
	},
	{
		"fips": 48353,
		"state": "TX",
		"area_name": "Nolan County",
		"bachelorsOrHigher": 12.9
	},
	{
		"fips": 48355,
		"state": "TX",
		"area_name": "Nueces County",
		"bachelorsOrHigher": 20.4
	},
	{
		"fips": 48357,
		"state": "TX",
		"area_name": "Ochiltree County",
		"bachelorsOrHigher": 14
	},
	{
		"fips": 48359,
		"state": "TX",
		"area_name": "Oldham County",
		"bachelorsOrHigher": 30.3
	},
	{
		"fips": 48361,
		"state": "TX",
		"area_name": "Orange County",
		"bachelorsOrHigher": 13.8
	},
	{
		"fips": 48363,
		"state": "TX",
		"area_name": "Palo Pinto County",
		"bachelorsOrHigher": 15.9
	},
	{
		"fips": 48365,
		"state": "TX",
		"area_name": "Panola County",
		"bachelorsOrHigher": 11.4
	},
	{
		"fips": 48367,
		"state": "TX",
		"area_name": "Parker County",
		"bachelorsOrHigher": 25.6
	},
	{
		"fips": 48369,
		"state": "TX",
		"area_name": "Parmer County",
		"bachelorsOrHigher": 15.8
	},
	{
		"fips": 48371,
		"state": "TX",
		"area_name": "Pecos County",
		"bachelorsOrHigher": 11.5
	},
	{
		"fips": 48373,
		"state": "TX",
		"area_name": "Polk County",
		"bachelorsOrHigher": 12.1
	},
	{
		"fips": 48375,
		"state": "TX",
		"area_name": "Potter County",
		"bachelorsOrHigher": 15.1
	},
	{
		"fips": 48377,
		"state": "TX",
		"area_name": "Presidio County",
		"bachelorsOrHigher": 22
	},
	{
		"fips": 48379,
		"state": "TX",
		"area_name": "Rains County",
		"bachelorsOrHigher": 11.4
	},
	{
		"fips": 48381,
		"state": "TX",
		"area_name": "Randall County",
		"bachelorsOrHigher": 30.7
	},
	{
		"fips": 48383,
		"state": "TX",
		"area_name": "Reagan County",
		"bachelorsOrHigher": 11
	},
	{
		"fips": 48385,
		"state": "TX",
		"area_name": "Real County",
		"bachelorsOrHigher": 20
	},
	{
		"fips": 48387,
		"state": "TX",
		"area_name": "Red River County",
		"bachelorsOrHigher": 14.2
	},
	{
		"fips": 48389,
		"state": "TX",
		"area_name": "Reeves County",
		"bachelorsOrHigher": 10.6
	},
	{
		"fips": 48391,
		"state": "TX",
		"area_name": "Refugio County",
		"bachelorsOrHigher": 10.3
	},
	{
		"fips": 48393,
		"state": "TX",
		"area_name": "Roberts County",
		"bachelorsOrHigher": 34.3
	},
	{
		"fips": 48395,
		"state": "TX",
		"area_name": "Robertson County",
		"bachelorsOrHigher": 17
	},
	{
		"fips": 48397,
		"state": "TX",
		"area_name": "Rockwall County",
		"bachelorsOrHigher": 36.7
	},
	{
		"fips": 48399,
		"state": "TX",
		"area_name": "Runnels County",
		"bachelorsOrHigher": 13.7
	},
	{
		"fips": 48401,
		"state": "TX",
		"area_name": "Rusk County",
		"bachelorsOrHigher": 13.3
	},
	{
		"fips": 48403,
		"state": "TX",
		"area_name": "Sabine County",
		"bachelorsOrHigher": 12.2
	},
	{
		"fips": 48405,
		"state": "TX",
		"area_name": "San Augustine County",
		"bachelorsOrHigher": 10
	},
	{
		"fips": 48407,
		"state": "TX",
		"area_name": "San Jacinto County",
		"bachelorsOrHigher": 12.3
	},
	{
		"fips": 48409,
		"state": "TX",
		"area_name": "San Patricio County",
		"bachelorsOrHigher": 14.8
	},
	{
		"fips": 48411,
		"state": "TX",
		"area_name": "San Saba County",
		"bachelorsOrHigher": 13.5
	},
	{
		"fips": 48413,
		"state": "TX",
		"area_name": "Schleicher County",
		"bachelorsOrHigher": 20.4
	},
	{
		"fips": 48415,
		"state": "TX",
		"area_name": "Scurry County",
		"bachelorsOrHigher": 15.4
	},
	{
		"fips": 48417,
		"state": "TX",
		"area_name": "Shackelford County",
		"bachelorsOrHigher": 24.3
	},
	{
		"fips": 48419,
		"state": "TX",
		"area_name": "Shelby County",
		"bachelorsOrHigher": 13.8
	},
	{
		"fips": 48421,
		"state": "TX",
		"area_name": "Sherman County",
		"bachelorsOrHigher": 21.2
	},
	{
		"fips": 48423,
		"state": "TX",
		"area_name": "Smith County",
		"bachelorsOrHigher": 25.2
	},
	{
		"fips": 48425,
		"state": "TX",
		"area_name": "Somervell County",
		"bachelorsOrHigher": 27
	},
	{
		"fips": 48427,
		"state": "TX",
		"area_name": "Starr County",
		"bachelorsOrHigher": 9.6
	},
	{
		"fips": 48429,
		"state": "TX",
		"area_name": "Stephens County",
		"bachelorsOrHigher": 16.5
	},
	{
		"fips": 48431,
		"state": "TX",
		"area_name": "Sterling County",
		"bachelorsOrHigher": 26.6
	},
	{
		"fips": 48433,
		"state": "TX",
		"area_name": "Stonewall County",
		"bachelorsOrHigher": 17.7
	},
	{
		"fips": 48435,
		"state": "TX",
		"area_name": "Sutton County",
		"bachelorsOrHigher": 17.8
	},
	{
		"fips": 48437,
		"state": "TX",
		"area_name": "Swisher County",
		"bachelorsOrHigher": 15.6
	},
	{
		"fips": 48439,
		"state": "TX",
		"area_name": "Tarrant County",
		"bachelorsOrHigher": 29.7
	},
	{
		"fips": 48441,
		"state": "TX",
		"area_name": "Taylor County",
		"bachelorsOrHigher": 24.6
	},
	{
		"fips": 48443,
		"state": "TX",
		"area_name": "Terrell County",
		"bachelorsOrHigher": 16.9
	},
	{
		"fips": 48445,
		"state": "TX",
		"area_name": "Terry County",
		"bachelorsOrHigher": 12.8
	},
	{
		"fips": 48447,
		"state": "TX",
		"area_name": "Throckmorton County",
		"bachelorsOrHigher": 20.7
	},
	{
		"fips": 48449,
		"state": "TX",
		"area_name": "Titus County",
		"bachelorsOrHigher": 14.2
	},
	{
		"fips": 48451,
		"state": "TX",
		"area_name": "Tom Green County",
		"bachelorsOrHigher": 21.5
	},
	{
		"fips": 48453,
		"state": "TX",
		"area_name": "Travis County",
		"bachelorsOrHigher": 45.2
	},
	{
		"fips": 48455,
		"state": "TX",
		"area_name": "Trinity County",
		"bachelorsOrHigher": 10.8
	},
	{
		"fips": 48457,
		"state": "TX",
		"area_name": "Tyler County",
		"bachelorsOrHigher": 11.6
	},
	{
		"fips": 48459,
		"state": "TX",
		"area_name": "Upshur County",
		"bachelorsOrHigher": 14.3
	},
	{
		"fips": 48461,
		"state": "TX",
		"area_name": "Upton County",
		"bachelorsOrHigher": 11
	},
	{
		"fips": 48463,
		"state": "TX",
		"area_name": "Uvalde County",
		"bachelorsOrHigher": 15.3
	},
	{
		"fips": 48465,
		"state": "TX",
		"area_name": "Val Verde County",
		"bachelorsOrHigher": 16.3
	},
	{
		"fips": 48467,
		"state": "TX",
		"area_name": "Van Zandt County",
		"bachelorsOrHigher": 14.9
	},
	{
		"fips": 48469,
		"state": "TX",
		"area_name": "Victoria County",
		"bachelorsOrHigher": 16.8
	},
	{
		"fips": 48471,
		"state": "TX",
		"area_name": "Walker County",
		"bachelorsOrHigher": 18.4
	},
	{
		"fips": 48473,
		"state": "TX",
		"area_name": "Waller County",
		"bachelorsOrHigher": 18.4
	},
	{
		"fips": 48475,
		"state": "TX",
		"area_name": "Ward County",
		"bachelorsOrHigher": 12.8
	},
	{
		"fips": 48477,
		"state": "TX",
		"area_name": "Washington County",
		"bachelorsOrHigher": 23.1
	},
	{
		"fips": 48479,
		"state": "TX",
		"area_name": "Webb County",
		"bachelorsOrHigher": 17
	},
	{
		"fips": 48481,
		"state": "TX",
		"area_name": "Wharton County",
		"bachelorsOrHigher": 13.8
	},
	{
		"fips": 48483,
		"state": "TX",
		"area_name": "Wheeler County",
		"bachelorsOrHigher": 16.9
	},
	{
		"fips": 48485,
		"state": "TX",
		"area_name": "Wichita County",
		"bachelorsOrHigher": 20.8
	},
	{
		"fips": 48487,
		"state": "TX",
		"area_name": "Wilbarger County",
		"bachelorsOrHigher": 17.6
	},
	{
		"fips": 48489,
		"state": "TX",
		"area_name": "Willacy County",
		"bachelorsOrHigher": 9.2
	},
	{
		"fips": 48491,
		"state": "TX",
		"area_name": "Williamson County",
		"bachelorsOrHigher": 38.6
	},
	{
		"fips": 48493,
		"state": "TX",
		"area_name": "Wilson County",
		"bachelorsOrHigher": 18.5
	},
	{
		"fips": 48495,
		"state": "TX",
		"area_name": "Winkler County",
		"bachelorsOrHigher": 11.1
	},
	{
		"fips": 48497,
		"state": "TX",
		"area_name": "Wise County",
		"bachelorsOrHigher": 15.9
	},
	{
		"fips": 48499,
		"state": "TX",
		"area_name": "Wood County",
		"bachelorsOrHigher": 17.9
	},
	{
		"fips": 48501,
		"state": "TX",
		"area_name": "Yoakum County",
		"bachelorsOrHigher": 15.8
	},
	{
		"fips": 48503,
		"state": "TX",
		"area_name": "Young County",
		"bachelorsOrHigher": 17.6
	},
	{
		"fips": 48505,
		"state": "TX",
		"area_name": "Zapata County",
		"bachelorsOrHigher": 9.6
	},
	{
		"fips": 48507,
		"state": "TX",
		"area_name": "Zavala County",
		"bachelorsOrHigher": 8.5
	},
	{
		"fips": 49001,
		"state": "UT",
		"area_name": "Beaver County",
		"bachelorsOrHigher": 18.2
	},
	{
		"fips": 49003,
		"state": "UT",
		"area_name": "Box Elder County",
		"bachelorsOrHigher": 21.6
	},
	{
		"fips": 49005,
		"state": "UT",
		"area_name": "Cache County",
		"bachelorsOrHigher": 35.9
	},
	{
		"fips": 49007,
		"state": "UT",
		"area_name": "Carbon County",
		"bachelorsOrHigher": 13
	},
	{
		"fips": 49009,
		"state": "UT",
		"area_name": "Daggett County",
		"bachelorsOrHigher": 19.3
	},
	{
		"fips": 49011,
		"state": "UT",
		"area_name": "Davis County",
		"bachelorsOrHigher": 34.6
	},
	{
		"fips": 49013,
		"state": "UT",
		"area_name": "Duchesne County",
		"bachelorsOrHigher": 15.4
	},
	{
		"fips": 49015,
		"state": "UT",
		"area_name": "Emery County",
		"bachelorsOrHigher": 12.3
	},
	{
		"fips": 49017,
		"state": "UT",
		"area_name": "Garfield County",
		"bachelorsOrHigher": 21.4
	},
	{
		"fips": 49019,
		"state": "UT",
		"area_name": "Grand County",
		"bachelorsOrHigher": 23.2
	},
	{
		"fips": 49021,
		"state": "UT",
		"area_name": "Iron County",
		"bachelorsOrHigher": 27.9
	},
	{
		"fips": 49023,
		"state": "UT",
		"area_name": "Juab County",
		"bachelorsOrHigher": 16.3
	},
	{
		"fips": 49025,
		"state": "UT",
		"area_name": "Kane County",
		"bachelorsOrHigher": 25.6
	},
	{
		"fips": 49027,
		"state": "UT",
		"area_name": "Millard County",
		"bachelorsOrHigher": 19.2
	},
	{
		"fips": 49029,
		"state": "UT",
		"area_name": "Morgan County",
		"bachelorsOrHigher": 34.5
	},
	{
		"fips": 49031,
		"state": "UT",
		"area_name": "Piute County",
		"bachelorsOrHigher": 17.4
	},
	{
		"fips": 49033,
		"state": "UT",
		"area_name": "Rich County",
		"bachelorsOrHigher": 16.1
	},
	{
		"fips": 49035,
		"state": "UT",
		"area_name": "Salt Lake County",
		"bachelorsOrHigher": 31.3
	},
	{
		"fips": 49037,
		"state": "UT",
		"area_name": "San Juan County",
		"bachelorsOrHigher": 18.8
	},
	{
		"fips": 49039,
		"state": "UT",
		"area_name": "Sanpete County",
		"bachelorsOrHigher": 20.3
	},
	{
		"fips": 49041,
		"state": "UT",
		"area_name": "Sevier County",
		"bachelorsOrHigher": 16.2
	},
	{
		"fips": 49043,
		"state": "UT",
		"area_name": "Summit County",
		"bachelorsOrHigher": 50.1
	},
	{
		"fips": 49045,
		"state": "UT",
		"area_name": "Tooele County",
		"bachelorsOrHigher": 20.6
	},
	{
		"fips": 49047,
		"state": "UT",
		"area_name": "Uintah County",
		"bachelorsOrHigher": 16.6
	},
	{
		"fips": 49049,
		"state": "UT",
		"area_name": "Utah County",
		"bachelorsOrHigher": 36.9
	},
	{
		"fips": 49051,
		"state": "UT",
		"area_name": "Wasatch County",
		"bachelorsOrHigher": 34.4
	},
	{
		"fips": 49053,
		"state": "UT",
		"area_name": "Washington County",
		"bachelorsOrHigher": 27.1
	},
	{
		"fips": 49055,
		"state": "UT",
		"area_name": "Wayne County",
		"bachelorsOrHigher": 26.5
	},
	{
		"fips": 49057,
		"state": "UT",
		"area_name": "Weber County",
		"bachelorsOrHigher": 23.2
	},
	{
		"fips": 50001,
		"state": "VT",
		"area_name": "Addison County",
		"bachelorsOrHigher": 35.4
	},
	{
		"fips": 50003,
		"state": "VT",
		"area_name": "Bennington County",
		"bachelorsOrHigher": 32
	},
	{
		"fips": 50005,
		"state": "VT",
		"area_name": "Caledonia County",
		"bachelorsOrHigher": 25.8
	},
	{
		"fips": 50007,
		"state": "VT",
		"area_name": "Chittenden County",
		"bachelorsOrHigher": 48
	},
	{
		"fips": 50009,
		"state": "VT",
		"area_name": "Essex County",
		"bachelorsOrHigher": 14.1
	},
	{
		"fips": 50011,
		"state": "VT",
		"area_name": "Franklin County",
		"bachelorsOrHigher": 23.2
	},
	{
		"fips": 50013,
		"state": "VT",
		"area_name": "Grand Isle County",
		"bachelorsOrHigher": 32.4
	},
	{
		"fips": 50015,
		"state": "VT",
		"area_name": "Lamoille County",
		"bachelorsOrHigher": 35.3
	},
	{
		"fips": 50017,
		"state": "VT",
		"area_name": "Orange County",
		"bachelorsOrHigher": 31.6
	},
	{
		"fips": 50019,
		"state": "VT",
		"area_name": "Orleans County",
		"bachelorsOrHigher": 21.4
	},
	{
		"fips": 50021,
		"state": "VT",
		"area_name": "Rutland County",
		"bachelorsOrHigher": 28.8
	},
	{
		"fips": 50023,
		"state": "VT",
		"area_name": "Washington County",
		"bachelorsOrHigher": 39
	},
	{
		"fips": 50025,
		"state": "VT",
		"area_name": "Windham County",
		"bachelorsOrHigher": 34.5
	},
	{
		"fips": 50027,
		"state": "VT",
		"area_name": "Windsor County",
		"bachelorsOrHigher": 34.3
	},
	{
		"fips": 51001,
		"state": "VA",
		"area_name": "Accomack County",
		"bachelorsOrHigher": 18.3
	},
	{
		"fips": 51003,
		"state": "VA",
		"area_name": "Albemarle County",
		"bachelorsOrHigher": 52.1
	},
	{
		"fips": 51005,
		"state": "VA",
		"area_name": "Alleghany County",
		"bachelorsOrHigher": 16.9
	},
	{
		"fips": 51007,
		"state": "VA",
		"area_name": "Amelia County",
		"bachelorsOrHigher": 15.6
	},
	{
		"fips": 51009,
		"state": "VA",
		"area_name": "Amherst County",
		"bachelorsOrHigher": 18.3
	},
	{
		"fips": 51011,
		"state": "VA",
		"area_name": "Appomattox County",
		"bachelorsOrHigher": 15.3
	},
	{
		"fips": 51013,
		"state": "VA",
		"area_name": "Arlington County",
		"bachelorsOrHigher": 72
	},
	{
		"fips": 51015,
		"state": "VA",
		"area_name": "Augusta County",
		"bachelorsOrHigher": 21.2
	},
	{
		"fips": 51017,
		"state": "VA",
		"area_name": "Bath County",
		"bachelorsOrHigher": 19.8
	},
	{
		"fips": 51019,
		"state": "VA",
		"area_name": "Bedford County",
		"bachelorsOrHigher": 26.3
	},
	{
		"fips": 51021,
		"state": "VA",
		"area_name": "Bland County",
		"bachelorsOrHigher": 14.2
	},
	{
		"fips": 51023,
		"state": "VA",
		"area_name": "Botetourt County",
		"bachelorsOrHigher": 25.4
	},
	{
		"fips": 51025,
		"state": "VA",
		"area_name": "Brunswick County",
		"bachelorsOrHigher": 13.3
	},
	{
		"fips": 51027,
		"state": "VA",
		"area_name": "Buchanan County",
		"bachelorsOrHigher": 8.6
	},
	{
		"fips": 51029,
		"state": "VA",
		"area_name": "Buckingham County",
		"bachelorsOrHigher": 11.2
	},
	{
		"fips": 51031,
		"state": "VA",
		"area_name": "Campbell County",
		"bachelorsOrHigher": 18.9
	},
	{
		"fips": 51033,
		"state": "VA",
		"area_name": "Caroline County",
		"bachelorsOrHigher": 19.3
	},
	{
		"fips": 51035,
		"state": "VA",
		"area_name": "Carroll County",
		"bachelorsOrHigher": 13
	},
	{
		"fips": 51036,
		"state": "VA",
		"area_name": "Charles City County",
		"bachelorsOrHigher": 11.8
	},
	{
		"fips": 51037,
		"state": "VA",
		"area_name": "Charlotte County",
		"bachelorsOrHigher": 15.4
	},
	{
		"fips": 51041,
		"state": "VA",
		"area_name": "Chesterfield County",
		"bachelorsOrHigher": 36.6
	},
	{
		"fips": 51043,
		"state": "VA",
		"area_name": "Clarke County",
		"bachelorsOrHigher": 32.2
	},
	{
		"fips": 51045,
		"state": "VA",
		"area_name": "Craig County",
		"bachelorsOrHigher": 13.1
	},
	{
		"fips": 51047,
		"state": "VA",
		"area_name": "Culpeper County",
		"bachelorsOrHigher": 21.4
	},
	{
		"fips": 51049,
		"state": "VA",
		"area_name": "Cumberland County",
		"bachelorsOrHigher": 16.4
	},
	{
		"fips": 51051,
		"state": "VA",
		"area_name": "Dickenson County",
		"bachelorsOrHigher": 10.2
	},
	{
		"fips": 51053,
		"state": "VA",
		"area_name": "Dinwiddie County",
		"bachelorsOrHigher": 13.7
	},
	{
		"fips": 51057,
		"state": "VA",
		"area_name": "Essex County",
		"bachelorsOrHigher": 13.7
	},
	{
		"fips": 51059,
		"state": "VA",
		"area_name": "Fairfax County",
		"bachelorsOrHigher": 59.2
	},
	{
		"fips": 51061,
		"state": "VA",
		"area_name": "Fauquier County",
		"bachelorsOrHigher": 34.3
	},
	{
		"fips": 51063,
		"state": "VA",
		"area_name": "Floyd County",
		"bachelorsOrHigher": 16.7
	},
	{
		"fips": 51065,
		"state": "VA",
		"area_name": "Fluvanna County",
		"bachelorsOrHigher": 29.6
	},
	{
		"fips": 51067,
		"state": "VA",
		"area_name": "Franklin County",
		"bachelorsOrHigher": 19.8
	},
	{
		"fips": 51069,
		"state": "VA",
		"area_name": "Frederick County",
		"bachelorsOrHigher": 28.2
	},
	{
		"fips": 51071,
		"state": "VA",
		"area_name": "Giles County",
		"bachelorsOrHigher": 17
	},
	{
		"fips": 51073,
		"state": "VA",
		"area_name": "Gloucester County",
		"bachelorsOrHigher": 22.9
	},
	{
		"fips": 51075,
		"state": "VA",
		"area_name": "Goochland County",
		"bachelorsOrHigher": 38.3
	},
	{
		"fips": 51077,
		"state": "VA",
		"area_name": "Grayson County",
		"bachelorsOrHigher": 10.8
	},
	{
		"fips": 51079,
		"state": "VA",
		"area_name": "Greene County",
		"bachelorsOrHigher": 24.5
	},
	{
		"fips": 51081,
		"state": "VA",
		"area_name": "Greensville County",
		"bachelorsOrHigher": 8.5
	},
	{
		"fips": 51083,
		"state": "VA",
		"area_name": "Halifax County",
		"bachelorsOrHigher": 14.6
	},
	{
		"fips": 51085,
		"state": "VA",
		"area_name": "Hanover County",
		"bachelorsOrHigher": 36.3
	},
	{
		"fips": 51087,
		"state": "VA",
		"area_name": "Henrico County",
		"bachelorsOrHigher": 39.7
	},
	{
		"fips": 51089,
		"state": "VA",
		"area_name": "Henry County",
		"bachelorsOrHigher": 11.5
	},
	{
		"fips": 51091,
		"state": "VA",
		"area_name": "Highland County",
		"bachelorsOrHigher": 19.4
	},
	{
		"fips": 51093,
		"state": "VA",
		"area_name": "Isle of Wight County",
		"bachelorsOrHigher": 26.1
	},
	{
		"fips": 51095,
		"state": "VA",
		"area_name": "James City County",
		"bachelorsOrHigher": 46.1
	},
	{
		"fips": 51097,
		"state": "VA",
		"area_name": "King and Queen County",
		"bachelorsOrHigher": 16.8
	},
	{
		"fips": 51099,
		"state": "VA",
		"area_name": "King George County",
		"bachelorsOrHigher": 31.8
	},
	{
		"fips": 51101,
		"state": "VA",
		"area_name": "King William County",
		"bachelorsOrHigher": 19.1
	},
	{
		"fips": 51103,
		"state": "VA",
		"area_name": "Lancaster County",
		"bachelorsOrHigher": 28.7
	},
	{
		"fips": 51105,
		"state": "VA",
		"area_name": "Lee County",
		"bachelorsOrHigher": 11.1
	},
	{
		"fips": 51107,
		"state": "VA",
		"area_name": "Loudoun County",
		"bachelorsOrHigher": 58
	},
	{
		"fips": 51109,
		"state": "VA",
		"area_name": "Louisa County",
		"bachelorsOrHigher": 19.2
	},
	{
		"fips": 51111,
		"state": "VA",
		"area_name": "Lunenburg County",
		"bachelorsOrHigher": 12.5
	},
	{
		"fips": 51113,
		"state": "VA",
		"area_name": "Madison County",
		"bachelorsOrHigher": 23.1
	},
	{
		"fips": 51115,
		"state": "VA",
		"area_name": "Mathews County",
		"bachelorsOrHigher": 29
	},
	{
		"fips": 51117,
		"state": "VA",
		"area_name": "Mecklenburg County",
		"bachelorsOrHigher": 15.2
	},
	{
		"fips": 51119,
		"state": "VA",
		"area_name": "Middlesex County",
		"bachelorsOrHigher": 28.3
	},
	{
		"fips": 51121,
		"state": "VA",
		"area_name": "Montgomery County",
		"bachelorsOrHigher": 44.3
	},
	{
		"fips": 51125,
		"state": "VA",
		"area_name": "Nelson County",
		"bachelorsOrHigher": 29
	},
	{
		"fips": 51127,
		"state": "VA",
		"area_name": "New Kent County",
		"bachelorsOrHigher": 24.6
	},
	{
		"fips": 51131,
		"state": "VA",
		"area_name": "Northampton County",
		"bachelorsOrHigher": 20.4
	},
	{
		"fips": 51133,
		"state": "VA",
		"area_name": "Northumberland County",
		"bachelorsOrHigher": 23.6
	},
	{
		"fips": 51135,
		"state": "VA",
		"area_name": "Nottoway County",
		"bachelorsOrHigher": 12.2
	},
	{
		"fips": 51137,
		"state": "VA",
		"area_name": "Orange County",
		"bachelorsOrHigher": 24
	},
	{
		"fips": 51139,
		"state": "VA",
		"area_name": "Page County",
		"bachelorsOrHigher": 12.4
	},
	{
		"fips": 51141,
		"state": "VA",
		"area_name": "Patrick County",
		"bachelorsOrHigher": 11.2
	},
	{
		"fips": 51143,
		"state": "VA",
		"area_name": "Pittsylvania County",
		"bachelorsOrHigher": 14
	},
	{
		"fips": 51145,
		"state": "VA",
		"area_name": "Powhatan County",
		"bachelorsOrHigher": 28
	},
	{
		"fips": 51147,
		"state": "VA",
		"area_name": "Prince Edward County",
		"bachelorsOrHigher": 22.4
	},
	{
		"fips": 51149,
		"state": "VA",
		"area_name": "Prince George County",
		"bachelorsOrHigher": 18.5
	},
	{
		"fips": 51153,
		"state": "VA",
		"area_name": "Prince William County",
		"bachelorsOrHigher": 38.1
	},
	{
		"fips": 51155,
		"state": "VA",
		"area_name": "Pulaski County",
		"bachelorsOrHigher": 16.4
	},
	{
		"fips": 51157,
		"state": "VA",
		"area_name": "Rappahannock County",
		"bachelorsOrHigher": 32
	},
	{
		"fips": 51159,
		"state": "VA",
		"area_name": "Richmond County",
		"bachelorsOrHigher": 12.9
	},
	{
		"fips": 51161,
		"state": "VA",
		"area_name": "Roanoke County",
		"bachelorsOrHigher": 34
	},
	{
		"fips": 51163,
		"state": "VA",
		"area_name": "Rockbridge County",
		"bachelorsOrHigher": 23.5
	},
	{
		"fips": 51165,
		"state": "VA",
		"area_name": "Rockingham County",
		"bachelorsOrHigher": 23.7
	},
	{
		"fips": 51167,
		"state": "VA",
		"area_name": "Russell County",
		"bachelorsOrHigher": 11.9
	},
	{
		"fips": 51169,
		"state": "VA",
		"area_name": "Scott County",
		"bachelorsOrHigher": 11.6
	},
	{
		"fips": 51171,
		"state": "VA",
		"area_name": "Shenandoah County",
		"bachelorsOrHigher": 19.8
	},
	{
		"fips": 51173,
		"state": "VA",
		"area_name": "Smyth County",
		"bachelorsOrHigher": 14.9
	},
	{
		"fips": 51175,
		"state": "VA",
		"area_name": "Southampton County",
		"bachelorsOrHigher": 14.8
	},
	{
		"fips": 51177,
		"state": "VA",
		"area_name": "Spotsylvania County",
		"bachelorsOrHigher": 28.3
	},
	{
		"fips": 51179,
		"state": "VA",
		"area_name": "Stafford County",
		"bachelorsOrHigher": 37.1
	},
	{
		"fips": 51181,
		"state": "VA",
		"area_name": "Surry County",
		"bachelorsOrHigher": 18.8
	},
	{
		"fips": 51183,
		"state": "VA",
		"area_name": "Sussex County",
		"bachelorsOrHigher": 9
	},
	{
		"fips": 51185,
		"state": "VA",
		"area_name": "Tazewell County",
		"bachelorsOrHigher": 12.8
	},
	{
		"fips": 51187,
		"state": "VA",
		"area_name": "Warren County",
		"bachelorsOrHigher": 19.7
	},
	{
		"fips": 51191,
		"state": "VA",
		"area_name": "Washington County",
		"bachelorsOrHigher": 23.5
	},
	{
		"fips": 51193,
		"state": "VA",
		"area_name": "Westmoreland County",
		"bachelorsOrHigher": 16.5
	},
	{
		"fips": 51195,
		"state": "VA",
		"area_name": "Wise County",
		"bachelorsOrHigher": 12.8
	},
	{
		"fips": 51197,
		"state": "VA",
		"area_name": "Wythe County",
		"bachelorsOrHigher": 15.2
	},
	{
		"fips": 51199,
		"state": "VA",
		"area_name": "York County",
		"bachelorsOrHigher": 42
	},
	{
		"fips": 51510,
		"state": "VA",
		"area_name": "Alexandria city",
		"bachelorsOrHigher": 61.5
	},
	{
		"fips": 51520,
		"state": "VA",
		"area_name": "Bristol city",
		"bachelorsOrHigher": 20.4
	},
	{
		"fips": 51530,
		"state": "VA",
		"area_name": "Buena Vista city",
		"bachelorsOrHigher": 14
	},
	{
		"fips": 51540,
		"state": "VA",
		"area_name": "Charlottesville city",
		"bachelorsOrHigher": 49.3
	},
	{
		"fips": 51550,
		"state": "VA",
		"area_name": "Chesapeake city",
		"bachelorsOrHigher": 29.4
	},
	{
		"fips": 51570,
		"state": "VA",
		"area_name": "Colonial Heights city",
		"bachelorsOrHigher": 19.6
	},
	{
		"fips": 51580,
		"state": "VA",
		"area_name": "Covington city",
		"bachelorsOrHigher": 9
	},
	{
		"fips": 51590,
		"state": "VA",
		"area_name": "Danville city",
		"bachelorsOrHigher": 17.2
	},
	{
		"fips": 51595,
		"state": "VA",
		"area_name": "Emporia city",
		"bachelorsOrHigher": 15
	},
	{
		"fips": 51600,
		"state": "VA",
		"area_name": "Fairfax city",
		"bachelorsOrHigher": 53.5
	},
	{
		"fips": 51610,
		"state": "VA",
		"area_name": "Falls Church city",
		"bachelorsOrHigher": 75.1
	},
	{
		"fips": 51620,
		"state": "VA",
		"area_name": "Franklin city",
		"bachelorsOrHigher": 19.8
	},
	{
		"fips": 51630,
		"state": "VA",
		"area_name": "Fredericksburg city",
		"bachelorsOrHigher": 37.7
	},
	{
		"fips": 51640,
		"state": "VA",
		"area_name": "Galax city",
		"bachelorsOrHigher": 12.4
	},
	{
		"fips": 51650,
		"state": "VA",
		"area_name": "Hampton city",
		"bachelorsOrHigher": 23.3
	},
	{
		"fips": 51660,
		"state": "VA",
		"area_name": "Harrisonburg city",
		"bachelorsOrHigher": 35.6
	},
	{
		"fips": 51670,
		"state": "VA",
		"area_name": "Hopewell city",
		"bachelorsOrHigher": 10.9
	},
	{
		"fips": 51678,
		"state": "VA",
		"area_name": "Lexington city",
		"bachelorsOrHigher": 44.8
	},
	{
		"fips": 51680,
		"state": "VA",
		"area_name": "Lynchburg city",
		"bachelorsOrHigher": 32.3
	},
	{
		"fips": 51683,
		"state": "VA",
		"area_name": "Manassas city",
		"bachelorsOrHigher": 29.1
	},
	{
		"fips": 51685,
		"state": "VA",
		"area_name": "Manassas Park city",
		"bachelorsOrHigher": 26.3
	},
	{
		"fips": 51690,
		"state": "VA",
		"area_name": "Martinsville city",
		"bachelorsOrHigher": 16.6
	},
	{
		"fips": 51700,
		"state": "VA",
		"area_name": "Newport News city",
		"bachelorsOrHigher": 24.1
	},
	{
		"fips": 51710,
		"state": "VA",
		"area_name": "Norfolk city",
		"bachelorsOrHigher": 25.6
	},
	{
		"fips": 51720,
		"state": "VA",
		"area_name": "Norton city",
		"bachelorsOrHigher": 20.5
	},
	{
		"fips": 51730,
		"state": "VA",
		"area_name": "Petersburg city",
		"bachelorsOrHigher": 14.9
	},
	{
		"fips": 51735,
		"state": "VA",
		"area_name": "Poquoson city",
		"bachelorsOrHigher": 35.8
	},
	{
		"fips": 51740,
		"state": "VA",
		"area_name": "Portsmouth city",
		"bachelorsOrHigher": 19.5
	},
	{
		"fips": 51750,
		"state": "VA",
		"area_name": "Radford city",
		"bachelorsOrHigher": 34.9
	},
	{
		"fips": 51760,
		"state": "VA",
		"area_name": "Richmond city",
		"bachelorsOrHigher": 35.4
	},
	{
		"fips": 51770,
		"state": "VA",
		"area_name": "Roanoke city",
		"bachelorsOrHigher": 24.1
	},
	{
		"fips": 51775,
		"state": "VA",
		"area_name": "Salem city",
		"bachelorsOrHigher": 30.7
	},
	{
		"fips": 51790,
		"state": "VA",
		"area_name": "Staunton city",
		"bachelorsOrHigher": 31.5
	},
	{
		"fips": 51800,
		"state": "VA",
		"area_name": "Suffolk city",
		"bachelorsOrHigher": 26.1
	},
	{
		"fips": 51810,
		"state": "VA",
		"area_name": "Virginia Beach city",
		"bachelorsOrHigher": 33.5
	},
	{
		"fips": 51820,
		"state": "VA",
		"area_name": "Waynesboro city",
		"bachelorsOrHigher": 19
	},
	{
		"fips": 51830,
		"state": "VA",
		"area_name": "Williamsburg city",
		"bachelorsOrHigher": 48.6
	},
	{
		"fips": 51840,
		"state": "VA",
		"area_name": "Winchester city",
		"bachelorsOrHigher": 28.1
	},
	{
		"fips": 53001,
		"state": "WA",
		"area_name": "Adams County",
		"bachelorsOrHigher": 13.5
	},
	{
		"fips": 53003,
		"state": "WA",
		"area_name": "Asotin County",
		"bachelorsOrHigher": 18.5
	},
	{
		"fips": 53005,
		"state": "WA",
		"area_name": "Benton County",
		"bachelorsOrHigher": 29.2
	},
	{
		"fips": 53007,
		"state": "WA",
		"area_name": "Chelan County",
		"bachelorsOrHigher": 24
	},
	{
		"fips": 53009,
		"state": "WA",
		"area_name": "Clallam County",
		"bachelorsOrHigher": 24.5
	},
	{
		"fips": 53011,
		"state": "WA",
		"area_name": "Clark County",
		"bachelorsOrHigher": 26.5
	},
	{
		"fips": 53013,
		"state": "WA",
		"area_name": "Columbia County",
		"bachelorsOrHigher": 20.4
	},
	{
		"fips": 53015,
		"state": "WA",
		"area_name": "Cowlitz County",
		"bachelorsOrHigher": 15.6
	},
	{
		"fips": 53017,
		"state": "WA",
		"area_name": "Douglas County",
		"bachelorsOrHigher": 17.3
	},
	{
		"fips": 53019,
		"state": "WA",
		"area_name": "Ferry County",
		"bachelorsOrHigher": 15.7
	},
	{
		"fips": 53021,
		"state": "WA",
		"area_name": "Franklin County",
		"bachelorsOrHigher": 15.4
	},
	{
		"fips": 53023,
		"state": "WA",
		"area_name": "Garfield County",
		"bachelorsOrHigher": 21.9
	},
	{
		"fips": 53025,
		"state": "WA",
		"area_name": "Grant County",
		"bachelorsOrHigher": 15.5
	},
	{
		"fips": 53027,
		"state": "WA",
		"area_name": "Grays Harbor County",
		"bachelorsOrHigher": 15
	},
	{
		"fips": 53029,
		"state": "WA",
		"area_name": "Island County",
		"bachelorsOrHigher": 31.7
	},
	{
		"fips": 53031,
		"state": "WA",
		"area_name": "Jefferson County",
		"bachelorsOrHigher": 37.3
	},
	{
		"fips": 53033,
		"state": "WA",
		"area_name": "King County",
		"bachelorsOrHigher": 47.1
	},
	{
		"fips": 53035,
		"state": "WA",
		"area_name": "Kitsap County",
		"bachelorsOrHigher": 30
	},
	{
		"fips": 53037,
		"state": "WA",
		"area_name": "Kittitas County",
		"bachelorsOrHigher": 34
	},
	{
		"fips": 53039,
		"state": "WA",
		"area_name": "Klickitat County",
		"bachelorsOrHigher": 20.6
	},
	{
		"fips": 53041,
		"state": "WA",
		"area_name": "Lewis County",
		"bachelorsOrHigher": 14.1
	},
	{
		"fips": 53043,
		"state": "WA",
		"area_name": "Lincoln County",
		"bachelorsOrHigher": 19.3
	},
	{
		"fips": 53045,
		"state": "WA",
		"area_name": "Mason County",
		"bachelorsOrHigher": 17.9
	},
	{
		"fips": 53047,
		"state": "WA",
		"area_name": "Okanogan County",
		"bachelorsOrHigher": 17
	},
	{
		"fips": 53049,
		"state": "WA",
		"area_name": "Pacific County",
		"bachelorsOrHigher": 16.5
	},
	{
		"fips": 53051,
		"state": "WA",
		"area_name": "Pend Oreille County",
		"bachelorsOrHigher": 16.6
	},
	{
		"fips": 53053,
		"state": "WA",
		"area_name": "Pierce County",
		"bachelorsOrHigher": 24.2
	},
	{
		"fips": 53055,
		"state": "WA",
		"area_name": "San Juan County",
		"bachelorsOrHigher": 45.2
	},
	{
		"fips": 53057,
		"state": "WA",
		"area_name": "Skagit County",
		"bachelorsOrHigher": 24.5
	},
	{
		"fips": 53059,
		"state": "WA",
		"area_name": "Skamania County",
		"bachelorsOrHigher": 21.4
	},
	{
		"fips": 53061,
		"state": "WA",
		"area_name": "Snohomish County",
		"bachelorsOrHigher": 29.3
	},
	{
		"fips": 53063,
		"state": "WA",
		"area_name": "Spokane County",
		"bachelorsOrHigher": 28.6
	},
	{
		"fips": 53065,
		"state": "WA",
		"area_name": "Stevens County",
		"bachelorsOrHigher": 17.6
	},
	{
		"fips": 53067,
		"state": "WA",
		"area_name": "Thurston County",
		"bachelorsOrHigher": 32.9
	},
	{
		"fips": 53069,
		"state": "WA",
		"area_name": "Wahkiakum County",
		"bachelorsOrHigher": 13.9
	},
	{
		"fips": 53071,
		"state": "WA",
		"area_name": "Walla Walla County",
		"bachelorsOrHigher": 26.5
	},
	{
		"fips": 53073,
		"state": "WA",
		"area_name": "Whatcom County",
		"bachelorsOrHigher": 32.4
	},
	{
		"fips": 53075,
		"state": "WA",
		"area_name": "Whitman County",
		"bachelorsOrHigher": 47.8
	},
	{
		"fips": 53077,
		"state": "WA",
		"area_name": "Yakima County",
		"bachelorsOrHigher": 15.9
	},
	{
		"fips": 54001,
		"state": "WV",
		"area_name": "Barbour County",
		"bachelorsOrHigher": 12.3
	},
	{
		"fips": 54003,
		"state": "WV",
		"area_name": "Berkeley County",
		"bachelorsOrHigher": 20.3
	},
	{
		"fips": 54005,
		"state": "WV",
		"area_name": "Boone County",
		"bachelorsOrHigher": 9.1
	},
	{
		"fips": 54007,
		"state": "WV",
		"area_name": "Braxton County",
		"bachelorsOrHigher": 10.8
	},
	{
		"fips": 54009,
		"state": "WV",
		"area_name": "Brooke County",
		"bachelorsOrHigher": 17.1
	},
	{
		"fips": 54011,
		"state": "WV",
		"area_name": "Cabell County",
		"bachelorsOrHigher": 26.4
	},
	{
		"fips": 54013,
		"state": "WV",
		"area_name": "Calhoun County",
		"bachelorsOrHigher": 8.9
	},
	{
		"fips": 54015,
		"state": "WV",
		"area_name": "Clay County",
		"bachelorsOrHigher": 9.4
	},
	{
		"fips": 54017,
		"state": "WV",
		"area_name": "Doddridge County",
		"bachelorsOrHigher": 12.7
	},
	{
		"fips": 54019,
		"state": "WV",
		"area_name": "Fayette County",
		"bachelorsOrHigher": 11.8
	},
	{
		"fips": 54021,
		"state": "WV",
		"area_name": "Gilmer County",
		"bachelorsOrHigher": 16.6
	},
	{
		"fips": 54023,
		"state": "WV",
		"area_name": "Grant County",
		"bachelorsOrHigher": 12.6
	},
	{
		"fips": 54025,
		"state": "WV",
		"area_name": "Greenbrier County",
		"bachelorsOrHigher": 18.2
	},
	{
		"fips": 54027,
		"state": "WV",
		"area_name": "Hampshire County",
		"bachelorsOrHigher": 8.7
	},
	{
		"fips": 54029,
		"state": "WV",
		"area_name": "Hancock County",
		"bachelorsOrHigher": 16.8
	},
	{
		"fips": 54031,
		"state": "WV",
		"area_name": "Hardy County",
		"bachelorsOrHigher": 12.2
	},
	{
		"fips": 54033,
		"state": "WV",
		"area_name": "Harrison County",
		"bachelorsOrHigher": 20.2
	},
	{
		"fips": 54035,
		"state": "WV",
		"area_name": "Jackson County",
		"bachelorsOrHigher": 16.2
	},
	{
		"fips": 54037,
		"state": "WV",
		"area_name": "Jefferson County",
		"bachelorsOrHigher": 28.3
	},
	{
		"fips": 54039,
		"state": "WV",
		"area_name": "Kanawha County",
		"bachelorsOrHigher": 24.9
	},
	{
		"fips": 54041,
		"state": "WV",
		"area_name": "Lewis County",
		"bachelorsOrHigher": 14.9
	},
	{
		"fips": 54043,
		"state": "WV",
		"area_name": "Lincoln County",
		"bachelorsOrHigher": 9.1
	},
	{
		"fips": 54045,
		"state": "WV",
		"area_name": "Logan County",
		"bachelorsOrHigher": 8.5
	},
	{
		"fips": 54047,
		"state": "WV",
		"area_name": "McDowell County",
		"bachelorsOrHigher": 5.8
	},
	{
		"fips": 54049,
		"state": "WV",
		"area_name": "Marion County",
		"bachelorsOrHigher": 20.9
	},
	{
		"fips": 54051,
		"state": "WV",
		"area_name": "Marshall County",
		"bachelorsOrHigher": 15.9
	},
	{
		"fips": 54053,
		"state": "WV",
		"area_name": "Mason County",
		"bachelorsOrHigher": 10.1
	},
	{
		"fips": 54055,
		"state": "WV",
		"area_name": "Mercer County",
		"bachelorsOrHigher": 19
	},
	{
		"fips": 54057,
		"state": "WV",
		"area_name": "Mineral County",
		"bachelorsOrHigher": 12.8
	},
	{
		"fips": 54059,
		"state": "WV",
		"area_name": "Mingo County",
		"bachelorsOrHigher": 10.5
	},
	{
		"fips": 54061,
		"state": "WV",
		"area_name": "Monongalia County",
		"bachelorsOrHigher": 38.8
	},
	{
		"fips": 54063,
		"state": "WV",
		"area_name": "Monroe County",
		"bachelorsOrHigher": 13.8
	},
	{
		"fips": 54065,
		"state": "WV",
		"area_name": "Morgan County",
		"bachelorsOrHigher": 16.5
	},
	{
		"fips": 54067,
		"state": "WV",
		"area_name": "Nicholas County",
		"bachelorsOrHigher": 13.6
	},
	{
		"fips": 54069,
		"state": "WV",
		"area_name": "Ohio County",
		"bachelorsOrHigher": 28.6
	},
	{
		"fips": 54071,
		"state": "WV",
		"area_name": "Pendleton County",
		"bachelorsOrHigher": 14
	},
	{
		"fips": 54073,
		"state": "WV",
		"area_name": "Pleasants County",
		"bachelorsOrHigher": 13.3
	},
	{
		"fips": 54075,
		"state": "WV",
		"area_name": "Pocahontas County",
		"bachelorsOrHigher": 15.8
	},
	{
		"fips": 54077,
		"state": "WV",
		"area_name": "Preston County",
		"bachelorsOrHigher": 12.9
	},
	{
		"fips": 54079,
		"state": "WV",
		"area_name": "Putnam County",
		"bachelorsOrHigher": 23.9
	},
	{
		"fips": 54081,
		"state": "WV",
		"area_name": "Raleigh County",
		"bachelorsOrHigher": 18.2
	},
	{
		"fips": 54083,
		"state": "WV",
		"area_name": "Randolph County",
		"bachelorsOrHigher": 18.1
	},
	{
		"fips": 54085,
		"state": "WV",
		"area_name": "Ritchie County",
		"bachelorsOrHigher": 10.4
	},
	{
		"fips": 54087,
		"state": "WV",
		"area_name": "Roane County",
		"bachelorsOrHigher": 10.3
	},
	{
		"fips": 54089,
		"state": "WV",
		"area_name": "Summers County",
		"bachelorsOrHigher": 13
	},
	{
		"fips": 54091,
		"state": "WV",
		"area_name": "Taylor County",
		"bachelorsOrHigher": 15.8
	},
	{
		"fips": 54093,
		"state": "WV",
		"area_name": "Tucker County",
		"bachelorsOrHigher": 13.8
	},
	{
		"fips": 54095,
		"state": "WV",
		"area_name": "Tyler County",
		"bachelorsOrHigher": 10
	},
	{
		"fips": 54097,
		"state": "WV",
		"area_name": "Upshur County",
		"bachelorsOrHigher": 15.8
	},
	{
		"fips": 54099,
		"state": "WV",
		"area_name": "Wayne County",
		"bachelorsOrHigher": 12.6
	},
	{
		"fips": 54101,
		"state": "WV",
		"area_name": "Webster County",
		"bachelorsOrHigher": 9.1
	},
	{
		"fips": 54103,
		"state": "WV",
		"area_name": "Wetzel County",
		"bachelorsOrHigher": 10.2
	},
	{
		"fips": 54105,
		"state": "WV",
		"area_name": "Wirt County",
		"bachelorsOrHigher": 10.9
	},
	{
		"fips": 54107,
		"state": "WV",
		"area_name": "Wood County",
		"bachelorsOrHigher": 18.7
	},
	{
		"fips": 54109,
		"state": "WV",
		"area_name": "Wyoming County",
		"bachelorsOrHigher": 9
	},
	{
		"fips": 55001,
		"state": "WI",
		"area_name": "Adams County",
		"bachelorsOrHigher": 12.6
	},
	{
		"fips": 55003,
		"state": "WI",
		"area_name": "Ashland County",
		"bachelorsOrHigher": 22.3
	},
	{
		"fips": 55005,
		"state": "WI",
		"area_name": "Barron County",
		"bachelorsOrHigher": 16.6
	},
	{
		"fips": 55007,
		"state": "WI",
		"area_name": "Bayfield County",
		"bachelorsOrHigher": 28.3
	},
	{
		"fips": 55009,
		"state": "WI",
		"area_name": "Brown County",
		"bachelorsOrHigher": 27.5
	},
	{
		"fips": 55011,
		"state": "WI",
		"area_name": "Buffalo County",
		"bachelorsOrHigher": 17.7
	},
	{
		"fips": 55013,
		"state": "WI",
		"area_name": "Burnett County",
		"bachelorsOrHigher": 16.8
	},
	{
		"fips": 55015,
		"state": "WI",
		"area_name": "Calumet County",
		"bachelorsOrHigher": 28
	},
	{
		"fips": 55017,
		"state": "WI",
		"area_name": "Chippewa County",
		"bachelorsOrHigher": 19.2
	},
	{
		"fips": 55019,
		"state": "WI",
		"area_name": "Clark County",
		"bachelorsOrHigher": 11.7
	},
	{
		"fips": 55021,
		"state": "WI",
		"area_name": "Columbia County",
		"bachelorsOrHigher": 22.2
	},
	{
		"fips": 55023,
		"state": "WI",
		"area_name": "Crawford County",
		"bachelorsOrHigher": 15.3
	},
	{
		"fips": 55025,
		"state": "WI",
		"area_name": "Dane County",
		"bachelorsOrHigher": 47.6
	},
	{
		"fips": 55027,
		"state": "WI",
		"area_name": "Dodge County",
		"bachelorsOrHigher": 15.7
	},
	{
		"fips": 55029,
		"state": "WI",
		"area_name": "Door County",
		"bachelorsOrHigher": 29.4
	},
	{
		"fips": 55031,
		"state": "WI",
		"area_name": "Douglas County",
		"bachelorsOrHigher": 21.9
	},
	{
		"fips": 55033,
		"state": "WI",
		"area_name": "Dunn County",
		"bachelorsOrHigher": 25.3
	},
	{
		"fips": 55035,
		"state": "WI",
		"area_name": "Eau Claire County",
		"bachelorsOrHigher": 31.1
	},
	{
		"fips": 55037,
		"state": "WI",
		"area_name": "Florence County",
		"bachelorsOrHigher": 15.4
	},
	{
		"fips": 55039,
		"state": "WI",
		"area_name": "Fond du Lac County",
		"bachelorsOrHigher": 20.9
	},
	{
		"fips": 55041,
		"state": "WI",
		"area_name": "Forest County",
		"bachelorsOrHigher": 14.2
	},
	{
		"fips": 55043,
		"state": "WI",
		"area_name": "Grant County",
		"bachelorsOrHigher": 20.2
	},
	{
		"fips": 55045,
		"state": "WI",
		"area_name": "Green County",
		"bachelorsOrHigher": 20.9
	},
	{
		"fips": 55047,
		"state": "WI",
		"area_name": "Green Lake County",
		"bachelorsOrHigher": 17.3
	},
	{
		"fips": 55049,
		"state": "WI",
		"area_name": "Iowa County",
		"bachelorsOrHigher": 23.2
	},
	{
		"fips": 55051,
		"state": "WI",
		"area_name": "Iron County",
		"bachelorsOrHigher": 20.6
	},
	{
		"fips": 55053,
		"state": "WI",
		"area_name": "Jackson County",
		"bachelorsOrHigher": 13.9
	},
	{
		"fips": 55055,
		"state": "WI",
		"area_name": "Jefferson County",
		"bachelorsOrHigher": 23.3
	},
	{
		"fips": 55057,
		"state": "WI",
		"area_name": "Juneau County",
		"bachelorsOrHigher": 12.4
	},
	{
		"fips": 55059,
		"state": "WI",
		"area_name": "Kenosha County",
		"bachelorsOrHigher": 24.3
	},
	{
		"fips": 55061,
		"state": "WI",
		"area_name": "Kewaunee County",
		"bachelorsOrHigher": 14.4
	},
	{
		"fips": 55063,
		"state": "WI",
		"area_name": "La Crosse County",
		"bachelorsOrHigher": 30.8
	},
	{
		"fips": 55065,
		"state": "WI",
		"area_name": "Lafayette County",
		"bachelorsOrHigher": 17.3
	},
	{
		"fips": 55067,
		"state": "WI",
		"area_name": "Langlade County",
		"bachelorsOrHigher": 13.5
	},
	{
		"fips": 55069,
		"state": "WI",
		"area_name": "Lincoln County",
		"bachelorsOrHigher": 15.2
	},
	{
		"fips": 55071,
		"state": "WI",
		"area_name": "Manitowoc County",
		"bachelorsOrHigher": 19.6
	},
	{
		"fips": 55073,
		"state": "WI",
		"area_name": "Marathon County",
		"bachelorsOrHigher": 23
	},
	{
		"fips": 55075,
		"state": "WI",
		"area_name": "Marinette County",
		"bachelorsOrHigher": 13.9
	},
	{
		"fips": 55077,
		"state": "WI",
		"area_name": "Marquette County",
		"bachelorsOrHigher": 13
	},
	{
		"fips": 55078,
		"state": "WI",
		"area_name": "Menominee County",
		"bachelorsOrHigher": 16.5
	},
	{
		"fips": 55079,
		"state": "WI",
		"area_name": "Milwaukee County",
		"bachelorsOrHigher": 28.7
	},
	{
		"fips": 55081,
		"state": "WI",
		"area_name": "Monroe County",
		"bachelorsOrHigher": 17.5
	},
	{
		"fips": 55083,
		"state": "WI",
		"area_name": "Oconto County",
		"bachelorsOrHigher": 15.4
	},
	{
		"fips": 55085,
		"state": "WI",
		"area_name": "Oneida County",
		"bachelorsOrHigher": 24.4
	},
	{
		"fips": 55087,
		"state": "WI",
		"area_name": "Outagamie County",
		"bachelorsOrHigher": 26.9
	},
	{
		"fips": 55089,
		"state": "WI",
		"area_name": "Ozaukee County",
		"bachelorsOrHigher": 46.4
	},
	{
		"fips": 55091,
		"state": "WI",
		"area_name": "Pepin County",
		"bachelorsOrHigher": 17.1
	},
	{
		"fips": 55093,
		"state": "WI",
		"area_name": "Pierce County",
		"bachelorsOrHigher": 26.3
	},
	{
		"fips": 55095,
		"state": "WI",
		"area_name": "Polk County",
		"bachelorsOrHigher": 19.2
	},
	{
		"fips": 55097,
		"state": "WI",
		"area_name": "Portage County",
		"bachelorsOrHigher": 28.3
	},
	{
		"fips": 55099,
		"state": "WI",
		"area_name": "Price County",
		"bachelorsOrHigher": 16.1
	},
	{
		"fips": 55101,
		"state": "WI",
		"area_name": "Racine County",
		"bachelorsOrHigher": 23.4
	},
	{
		"fips": 55103,
		"state": "WI",
		"area_name": "Richland County",
		"bachelorsOrHigher": 16.7
	},
	{
		"fips": 55105,
		"state": "WI",
		"area_name": "Rock County",
		"bachelorsOrHigher": 20
	},
	{
		"fips": 55107,
		"state": "WI",
		"area_name": "Rusk County",
		"bachelorsOrHigher": 14.2
	},
	{
		"fips": 55109,
		"state": "WI",
		"area_name": "St. Croix County",
		"bachelorsOrHigher": 32.4
	},
	{
		"fips": 55111,
		"state": "WI",
		"area_name": "Sauk County",
		"bachelorsOrHigher": 21.9
	},
	{
		"fips": 55113,
		"state": "WI",
		"area_name": "Sawyer County",
		"bachelorsOrHigher": 22.1
	},
	{
		"fips": 55115,
		"state": "WI",
		"area_name": "Shawano County",
		"bachelorsOrHigher": 15.1
	},
	{
		"fips": 55117,
		"state": "WI",
		"area_name": "Sheboygan County",
		"bachelorsOrHigher": 22.5
	},
	{
		"fips": 55119,
		"state": "WI",
		"area_name": "Taylor County",
		"bachelorsOrHigher": 13.8
	},
	{
		"fips": 55121,
		"state": "WI",
		"area_name": "Trempealeau County",
		"bachelorsOrHigher": 18.1
	},
	{
		"fips": 55123,
		"state": "WI",
		"area_name": "Vernon County",
		"bachelorsOrHigher": 20.1
	},
	{
		"fips": 55125,
		"state": "WI",
		"area_name": "Vilas County",
		"bachelorsOrHigher": 24.9
	},
	{
		"fips": 55127,
		"state": "WI",
		"area_name": "Walworth County",
		"bachelorsOrHigher": 26.3
	},
	{
		"fips": 55129,
		"state": "WI",
		"area_name": "Washburn County",
		"bachelorsOrHigher": 20.5
	},
	{
		"fips": 55131,
		"state": "WI",
		"area_name": "Washington County",
		"bachelorsOrHigher": 27.9
	},
	{
		"fips": 55133,
		"state": "WI",
		"area_name": "Waukesha County",
		"bachelorsOrHigher": 41
	},
	{
		"fips": 55135,
		"state": "WI",
		"area_name": "Waupaca County",
		"bachelorsOrHigher": 16.5
	},
	{
		"fips": 55137,
		"state": "WI",
		"area_name": "Waushara County",
		"bachelorsOrHigher": 15.2
	},
	{
		"fips": 55139,
		"state": "WI",
		"area_name": "Winnebago County",
		"bachelorsOrHigher": 26.1
	},
	{
		"fips": 55141,
		"state": "WI",
		"area_name": "Wood County",
		"bachelorsOrHigher": 18.9
	},
	{
		"fips": 56001,
		"state": "WY",
		"area_name": "Albany County",
		"bachelorsOrHigher": 48.8
	},
	{
		"fips": 56003,
		"state": "WY",
		"area_name": "Big Horn County",
		"bachelorsOrHigher": 20
	},
	{
		"fips": 56005,
		"state": "WY",
		"area_name": "Campbell County",
		"bachelorsOrHigher": 19.2
	},
	{
		"fips": 56007,
		"state": "WY",
		"area_name": "Carbon County",
		"bachelorsOrHigher": 17.2
	},
	{
		"fips": 56009,
		"state": "WY",
		"area_name": "Converse County",
		"bachelorsOrHigher": 19.6
	},
	{
		"fips": 56011,
		"state": "WY",
		"area_name": "Crook County",
		"bachelorsOrHigher": 21.6
	},
	{
		"fips": 56013,
		"state": "WY",
		"area_name": "Fremont County",
		"bachelorsOrHigher": 21.5
	},
	{
		"fips": 56015,
		"state": "WY",
		"area_name": "Goshen County",
		"bachelorsOrHigher": 21.5
	},
	{
		"fips": 56017,
		"state": "WY",
		"area_name": "Hot Springs County",
		"bachelorsOrHigher": 19.5
	},
	{
		"fips": 56019,
		"state": "WY",
		"area_name": "Johnson County",
		"bachelorsOrHigher": 27
	},
	{
		"fips": 56021,
		"state": "WY",
		"area_name": "Laramie County",
		"bachelorsOrHigher": 26.8
	},
	{
		"fips": 56023,
		"state": "WY",
		"area_name": "Lincoln County",
		"bachelorsOrHigher": 20.1
	},
	{
		"fips": 56025,
		"state": "WY",
		"area_name": "Natrona County",
		"bachelorsOrHigher": 21.3
	},
	{
		"fips": 56027,
		"state": "WY",
		"area_name": "Niobrara County",
		"bachelorsOrHigher": 21.4
	},
	{
		"fips": 56029,
		"state": "WY",
		"area_name": "Park County",
		"bachelorsOrHigher": 28.3
	},
	{
		"fips": 56031,
		"state": "WY",
		"area_name": "Platte County",
		"bachelorsOrHigher": 19.2
	},
	{
		"fips": 56033,
		"state": "WY",
		"area_name": "Sheridan County",
		"bachelorsOrHigher": 28.9
	},
	{
		"fips": 56035,
		"state": "WY",
		"area_name": "Sublette County",
		"bachelorsOrHigher": 23.6
	},
	{
		"fips": 56037,
		"state": "WY",
		"area_name": "Sweetwater County",
		"bachelorsOrHigher": 18.1
	},
	{
		"fips": 56039,
		"state": "WY",
		"area_name": "Teton County",
		"bachelorsOrHigher": 51.9
	},
	{
		"fips": 56041,
		"state": "WY",
		"area_name": "Uinta County",
		"bachelorsOrHigher": 18.7
	},
	{
		"fips": 56043,
		"state": "WY",
		"area_name": "Washakie County",
		"bachelorsOrHigher": 21.2
	},
	{
		"fips": 56045,
		"state": "WY",
		"area_name": "Weston County",
		"bachelorsOrHigher": 16.8
	}
];

// County Data
d3.json('path/to/counties.json').then(countyData => {
  const counties = topojson.feature(countyData, countyData.objects.counties).features;

  // Set dimensions and margins
  const width = 960;
  const height = 600;

  // Create SVG container
  const svg = d3.select("svg")
    .attr("width", width)
    .attr("height", height);

  // Set color scale
  const colorScale = d3.scaleQuantize()
    .domain([d3.min(educationData, d => d.bachelorsOrHigher), d3.max(educationData, d => d.bachelorsOrHigher)])
    .range(["#f7fbff", "#c6dbef", "#6baed6", "#2171b5"]);

  // Create a path generator
  const path = d3.geoPath();

  // Add counties
  svg.selectAll(".county")
    .data(counties)
    .enter().append("path")
    .attr("class", "county")
    .attr("d", path)
    .attr("data-fips", d => d.id)
    .attr("data-education", d => {
      const result = educationData.find(obj => obj.fips === d.id);
      return result ? result.bachelorsOrHigher : 0;
    })
    .attr("fill", d => {
      const result = educationData.find(obj => obj.fips === d.id);
      return result ? colorScale(result.bachelorsOrHigher) : "#ccc";
    })
    .on("mouseover", function(event, d) {
      const result = educationData.find(obj => obj.fips === d.id);
      const tooltip = d3.select("#tooltip");
      tooltip.style("display", "block")
        .style("left", `${event.pageX + 5}px`)
        .style("top", `${event.pageY - 28}px`)
        .attr("data-education", result ? result.bachelorsOrHigher : 0)
        .html(`County: ${result ? result.area_name : "Unknown"}<br>State: ${result ? result.state : "Unknown"}<br>Education: ${result ? result.bachelorsOrHigher : "N/A"}%`);
    })
    .on("mouseout", function() {
      d3.select("#tooltip").style("display", "none");
    });

  // Add legend
  const legend = d3.select("#legend");
  const legendData = colorScale.range().map(color => {
    const d = colorScale.invertExtent(color);
    return {
      color: color,
      min: d[0],
      max: d[1]
    };
  });

  legend.selectAll(".legend-rect")
    .data(legendData)
    .enter().append("div")
    .attr("class", "legend-rect")
    .style("background-color", d => d.color)
    .style("width", "30px")
    .style("height", "20px")
    .style("display", "inline-block")
    .style("margin-right", "5px");
});
