let production = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("production has started");
            resolve();
        }, 0);
    })
        .then(() => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log("The fruit has been chopped");
                    resolve();
                }, 2000);
            });
        })
        .then(() => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} Added`);
                    resolve();
                }, 1000);
            });
        })
        .then(() => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log("start the machine");
                    resolve();
                }, 1000);
            });
        })
        .then(() => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log(`Ice cream placed on ${stocks.holder[1]}`);
                    resolve();
                }, 2000);
            });
        })
        .then(() => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log(`${stocks.toppings[0]} as toppings`);
                    resolve();
                }, 3000);
            });
        })
        .then(() => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log("serve Ice cream");
                    resolve();
                }, 2000);
            });
        });
};
production();