function getEaster(year)
{
	var dTmp, day, dTmp2, mm, dd;
	
	var x = year - 2;
	var y = x % 19;
	var z = y * 11;
	var E = z % 30;
	var k = 44 - E;
	if(E > 23)
		dTmp = new Date(year, 3, k + 13);
	else
		dTmp = new Date(year, 2, k + 13);
		
	dd = dTmp.getDate();
	mm = dTmp.getMonth();
	dTmp2 = new Date(year, mm, dd);
	
	
	day = dTmp.getDay();
	
	switch(day){
		case 0: //SUNDAY
			if(E != 24 && E!= 25)
				dTmp2 = new Date(year, mm, dd + 7);
			break;
		case 1: //MONDAY
			if(E != 24)
				dTmp2 = new Date(year, mm, dd + 6);
			else
				dTmp2 = new Date(year, mm, dd - 1);
			break;
		case 2: //TUESDAY
			dTmp2 = new Date(year, mm, dd + 5);
			break;
		case 3: //WEDNESDAY
			dTmp2 = new Date(year, mm, dd + 4);
			break;
		case 4: //THURSDAY
			dTmp2 = new Date(year, mm, dd + 3);
			break;
		case 5: //FRIDAY
			dTmp2 = new Date(year, mm, dd + 2);
			break;
		case 6: //SATURDAY
			dTmp2 = new Date(year, mm, dd + 1);
			break;
		default:
			break;
	}
	
	return dTmp2;
}
