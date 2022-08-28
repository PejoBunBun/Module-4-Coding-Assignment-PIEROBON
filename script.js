var names=new Array();
names[0]="Yaakov";
names[1]="Joel";
names[2]="Jeremy";
names[3]="John";
names[4]="Lorenzo";
names[5]="Francesco";
names[6]="Marco";
names[7]="Gianni";
names[8]="Barbara";
names[9]="Paula";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}