exports.dbCreateTheme = (db, newTheme, callback) => {
    const query = 'INSERT INTO theme SET ?';

    db.query(query, newTheme, (error, res) => {
        if (error) {
            console.log(error);
            callback(error, null);
            return;
        }

        console.log("created THEME: ", { id: res.insertId, ...newTheme });
        callback(null, { id: res.insertId, ...newTheme });
    });
};

exports.dbUpdateTheme = (db, id, updatedTheme, callback) => {
    const query = 'UPDATE theme SET name = ?, background_colors_primary = ?, background_colors_secondary = ?, border_colors_primary = ?, icon_colors_menuItem = ?, icon_colors_activeMenuItem = ?, icon_colors_other_a = ?, icon_colors_other_b = ?, icon_colors_other_c = ?, icon_colors_other_d = ?, icon_colors_other_e = ?, surface_colors_primary = ?, surface_boxShadows_primary = ?, tab_colors_primary = ?, tab_colors_secondary = ?, text_colors_primary = ?, text_colors_secondary = ?, text_colors_menuItem = ?, text_colors_other_a = ?, text_colors_other_b = ?, text_colors_other_c = ?, text_colors_other_d = ?, text_colors_other_e = ?, text_colors_other_f = ?, text_colors_other_g = ? WHERE theme.id = ?';

    const columnVals = [
        updatedTheme.name,
        updatedTheme.background_colors_primary,
        updatedTheme.background_colors_secondary,
        updatedTheme.border_colors_primary,
        updatedTheme.icon_colors_menuItem,
        updatedTheme.icon_colors_activeMenuItem,
        updatedTheme.icon_colors_other_a,
        updatedTheme.icon_colors_other_b,
        updatedTheme.icon_colors_other_c,
        updatedTheme.icon_colors_other_d,
        updatedTheme.icon_colors_other_e,
        updatedTheme.surface_colors_primary,
        updatedTheme.surface_boxShadows_primary,
        updatedTheme.tab_colors_primary,
        updatedTheme.tab_colors_secondary,
        updatedTheme.text_colors_primary,
        updatedTheme.text_colors_secondary,
        updatedTheme.text_colors_menuItem,
        updatedTheme.text_colors_other_a,
        updatedTheme.text_colors_other_b,
        updatedTheme.text_colors_other_c,
        updatedTheme.text_colors_other_d,
        updatedTheme.text_colors_other_e,
        updatedTheme.text_colors_other_f,
        updatedTheme.text_colors_other_g, 
        id
    ];

    db.query(query, columnVals, (error, res) => {
        if (error) {
            callback(error, null);
            return;
        }

        if (res.affectedRows == 0) {
            callback({ message: "not found" }, null);
            return;
        }

        console.log("updated THEME: ", updatedTheme);
        callback(null, updatedTheme);
    });
};

exports.dbGetThemeById = (db, id, callback) => {
    const query = 'SELECT * from theme WHERE id = ?';
    
    db.query(query, id, (error, res) => {
        if (error) {
            console.log(error);
            callback(error, null);
            return;
        }

        if (res.length) {
            callback(null, res[0]);
            return;
        } 
        
        callback({ message: 'not found' }, null);
    });
};

exports.dbDeleteThemeById = (db, id, callback) => {
    const query = 'DELETE from theme WHERE id = ?';
    
    db.query(query, id, (error, res) => {
        if (error) {
            console.log(error);
            callback(error, null);
            return;
        }

        if (res.affectedRows == 0) {
            callback({ message: "not found" }, null);
            return;
        }
        console.log(`deleted THEME with id ${id}`);
        callback(null, res);
    });
};

exports.dbGetThemes = (db, callback) => {
    const query = 'SELECT * from theme LIMIT 10';
    
    db.query(query, (error, res) => {
        if (error) {
            console.log(error);
            callback(error, null);
            return;
        }

        if (res.length) {
            callback(null, res);
            return;
        } 
        
        callback({ message: 'not found' }, null);
    });
};