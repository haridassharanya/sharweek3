/* The purpose of this progream is to create
			 *a list of cookies with specific properties
			 *and from that list create new two new lists
			 * one my favorites and
			 * two the rest 			 */
			
			
			var myCookies = [{"name": "Oreo", "shape":"round"}, 
			{"name":"ChipsAhoy", "shape":"round"}, 
			{"name":"Newtons", "shape":"square"},
			{"name":"LornaDoone", "shape":"square"}]
			console.log(myCookies);
			
			/*these are lists i will sort my cookies into*/
			
			var myFaves=[]
			var theRest=[]
			
			/*for every cookie in my list, check its shape
			 * if its square add to myFaves, otherwise add to theRest */
			
			
			for (var i=0; i<4; i++){
				console.log(i);
			var currentCookie = myCookies [i];
			console.log(currentCookie);
			if (currentCookie.shape =="square"){
				console.log(currentCookie);
			myFaves.push(currentCookie);
			}else{theRest.push(currentCookie); 
				}//
			console.log("finished list");
			console.log(myFaves);
			console.log(theRest);
			
			}//
			