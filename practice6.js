
async function retry(operation, attempts) {
    for (let i = 1; i <= attempts; i++) {
        try {
            return await operation();
        } catch (error) {
            if (i === attempts) {
                throw error;
            }

            console.log(`Attempt ${i} failed. Retrying...`);
        }
    }
}

let count = 0;

async function fetchData() {
    count++;

    if (count < 3) {
        throw new Error("Network error");
    }

    return "Data loaded successfully";
}

retry(fetchData, 3)
    .then(console.log)
    .catch((error) => console.log(error.message));
