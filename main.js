console.log("Welcome to a bibfind system\n");

let database = {sz : 0, entry : []};
const max_sz = 10;

function bibEntry(index, author, database)
{
	if (database.sz >= max_sz)
	{
		console.log("Warning: not enough space in array\n");
		return;
	}
	database.entry[database.sz] = {index, author};
	(database.sz)++;
}

function bibEdit(database, index, auth)
{
	if (index >= 0 || index < max_sz)
	{
		database.entry[index].author = auth;
		return;
	}
	console.log("ERROR: index is out of bound\n");
}
//O(n) -> not the best O(1) ->O(log2)
function bibFind(database, author)
{
	for (let i = 0; i < database.sz; i++)
	{
		if (database.entry[i].author == author)
			return database.entry[i];
	}
	return null;
}

function bibPrint(database)
{
	console.log("database capacity = ", database.sz);
	for (let i = 0; i < database.sz; i++)
		console.log(database.entry[i]);
}

bibEntry(1, "William Peter Blatty", database);
bibEntry(2, "Stephen A King", database);
bibPrint(database);
bibEdit(database, 0, "My auhtor\n");
bibPrint(database);
console.log(bibFind(database, "William Peter Blatty"));
console.log(bibFind(database, "Stephen A King"));
