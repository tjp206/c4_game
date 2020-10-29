use c4
db.dropDatabase();

db.c4.insert([
    {
        name: 'Luke Skywalker',
        wins: 0,
    },
    {
        name: 'Master Yoda',
        wins: 0,
    },
    {
        name: 'Lord Vader',
        wins: 0,
    }
])