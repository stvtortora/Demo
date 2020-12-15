exports.dbGetStatsById = (db, id, callback) => {
    const query = 'SELECT stats.*, daily_views.* from stats join daily_views on stats.id = daily_views.stats_id where stats.id = ?';
    
    db.query(query, id, (error, result) => {
        if (error) {
            callback(error, null);
            return;
        }

        if (result.length) {
            console.log(`stats result: ${result}`);

            const formattedData = result.reduce((statsData, record, i) => {
                const { day, total, unique, ...rest } = record;

                if (i === 0) {
                    statsData = {
                        ...rest,
                        daily_views: {}
                    }
                }
                
                statsData.daily_views[day] = { total, unique };

                return statsData;
            }, {});

            callback(null, formattedData);
            return;
        } 
        
        callback({ message: 'not found' }, null);
    });
};

