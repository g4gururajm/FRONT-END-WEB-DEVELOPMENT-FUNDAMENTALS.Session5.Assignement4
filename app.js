  //array of objects
 var employee = [
		{
			'name' : 'ABCDE',  					/* object name */
			'salary':'12345',					/* object salary */
			'age':42,							/* object age */
			'address': {						/* object address */
				'city':'Banglore',				/* object city */
				'state':'Karnataka',			/* object state */
				'pin':560062					/* object pin */
			}
		},
		{
			'name' : 'DEFGH',					/* object name */
			'salary':'54321',					/* object salary */
			'age':45,							/* object age */
			'address': {						/* object address */		
				'city':'Bangalore',				/* object city */
				'state':'Karnataka',			/* object state */
				'pin':560058					/* object pin */
			}
		},
		{
			'name' : 'WXYZ',					/* object name */
			'salary':'32345',					/* object salary */
			'age':32,							/* object age */
			'address': {						/* object address */
				'city':'Mangalore',				/* object city */
				'state':'Karnataka',			/* object state */
				'pin':576351					/* object pin */
			}	
		},
		{
			'name' : 'xyzabc',					/* object name */
			'salary':'22345',					/* object salary */
			'age':28,							/* object age */
			'address': {						/* object address */
				'city':'Bengaluru',				/* object city */
				'state':'Karnataka',			/* object state */
				'pin':560062					/* object pin */
			}
		},
		{
			'name' : 'qwert',					/* object name */
			'salary':'223434',					/* object salary */
			'age':45,							/* object age */
			'address': {						/* object address */
				'city':'Bendakaluru',				/* object city */
				'state':'Karnataka',			/* object state */
				'pin':560062					/* object pin */
			}
		}
 ];

      /* display objects on console by refering elements(ele) from object array*/
    for (ele in employee) {
        console.log(employee[ele]);
		
	}
	console.log("Name of Employee:   " + employee[3].name); 			/* Print the name of the employee */
		console.log("age of Employee:    " + employee[3].age);				/* Print the age of the employee */	
		console.log("salary of Employee: " + employee[3].salary);			/* Print the salary of the employee */
		console.log("city of Employee:   " + employee[3].address.city);		/* Print the nested object address.city of the employee */
	    console.log("state of Employee:  " + employee[3].address.state);	/* Print the nested object address.state of the employee */
		console.log("pin of Employee:    " + employee[3].address.pin);		/* Print the nested object address.pin of the employee */
		console.log("================***********=====================")