//your code here!
let infilist = document.getElementById('infi-list');
function addmore(){
	for(let i=1; i<=2; i++)
		{
			let listItems = document.createElement('li');
			listItems.textContent = 'Item '+ (infilist.children.length + i);
			infilist.appendChild(listItems);
		}
}

infilist.addEventListener('scroll', function(){
	if(infilist.scrollTop + infilist.clientHeight >= infilist.scrollHeight){
		addmore();
	}
});

addmore();
