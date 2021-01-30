// const [first, second] = [true,false];



let course = [
	{
		math: 88,
		physics: 76,
		bangla: 88
	},
	{
		math : 77,
		physics: 88,
		bangla: 58
	}
]
let total =[];
course.forEach((e,i)=>{
		total [i]= e.math + e.physics + e.bangla;
})

console.log(
		total
	)