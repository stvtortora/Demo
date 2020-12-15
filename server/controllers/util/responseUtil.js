exports.sendResponse = (res, dataOptions) => {
    const { tableName, columnName, columnVal, methodVerb } = dataOptions;
    
    const columnMessage = columnName && columnVal ? ` with ${columnName} ${columnVal}` : "";

    return (err, data) => {
        if (err) {
            console.log(`Error ${methodVerb} ${tableName} err: ${err.message}`);

            if (err.message === "not found") {
              res.status(404).send({
                message: `Not found ${tableName}${columnMessage}`
              });
            } else {
              res.status(500).send({
                message: `Error ${methodVerb} ${tableName}${columnMessage}`
              });
            }
          } else {
              res.send(data);
          }
    }
}