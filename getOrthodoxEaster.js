function getEaster(year)
{
	var dTmp, iTmp, day;
	
	var x = year - 2;
	var y = x % 19;
	var z = y * 11;
	var E = z % 30;
	var k = 44 - E;
	if(E > 23)
		dTmp = new Date(year, 3, k);
	else
		dTmp = new Date(year, 2, k);
	iTmp = dTmp.getTime() + (13 * 24 * 60 * 60 * 1000);
	
	dTmp = new Date(iTmp);
	day = dTmp.getDay();
	
	switch(day){
		case 0: //SUNDAY
			iTmp = iTmp + (7 * 24 * 60 * 60 * 1000); 
			break;
		case 1: //MONDAY
			iTmp = iTmp + (6 * 24 * 60 * 60 * 1000);
			break;
		case 2: //TUESDAY
			iTmp = iTmp + (5 * 24 * 60 * 60 * 1000);
			break;
		case 3: //WEDNESDAY
			iTmp = iTmp + (4 * 24 * 60 * 60 * 1000);
			break;
		case 4: //THURSDAY
			iTmp = iTmp + (3 * 24 * 60 * 60 * 1000);
			break;
		case 5: //FRIDAY
			iTmp = iTmp + (2 * 24 * 60 * 60 * 1000);
			break;
		case 6: //SATURDAY
			iTmp = iTmp + (1 * 24 * 60 * 60 * 1000);
			break;
		default:
			break;
	}
	
	return new Date(iTmp);
}
