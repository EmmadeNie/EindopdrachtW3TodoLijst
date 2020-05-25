const apiUrl = "https://wincacademydatabase.firebaseio.com/Emma/tasks.json"

const getTasks = async function () {
    try {
        const res = await fetch(apiUrl, { method: "GET" });
        const data = await res.json();
        let tasks = Object.keys(data).map(key => ({
            id: key,
            description: data[key].description,
            done: data[key].done
        }));
        return tasks;
    } catch (error) {
        console.log(error);
    }
};

const postData = async function (data = {}) {
    const response = await fetch(apiUrl, {
        method: 'POST',
        redirect: 'follow',
        body: JSON.stringify(data)
    }); location.reload();
}

const PostTask = async function PostData() {
    try {
        const postRes = await fetch(database, { method: "POST", body: JSON.stringify(document.querySelector("#newtask").value) })
            .then(results => results.json())
            .then(console.log(results));
        GetData();
        return postRes;
    } catch (error) {
        console.log(error);
    }
}
const deleteTask = async function (id) {
    let url = `https://wincacademydatabase.firebaseio.com/Emma/tasks/${id}.json`
    try {
        const response = await fetch(url, {
            method: 'DELETE',
            redirect: 'follow',
        }); location.reload();
    } catch (error) {
        console.log(error);
    }
}

const updateTask = async function (id, data) {
    let url = `https://wincacademydatabase.firebaseio.com/Emma/tasks/${id}.json`
    try {
        const response = await fetch(url, {
            method: 'put',
            redirect: 'follow',
            body: JSON.stringify(data)
        });
    } catch (error) {
        console.log(error);
    }
}

