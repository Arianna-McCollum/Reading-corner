async function addFriendHandler(event) {
    event.preventDefault();
    console.log('click')

    async function getUserInfo() {

        // gets user id by email
        const email = document.querySelector('input[name="add-friend"]').value.trim();

        console.log(email)

        const response = await fetch(`/api/users/email/${email}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const friend = await response.json();
        console.log(friend);

        const response2 = await fetch(`/api/users/info/loggedIn`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const user = await response2.json();
        console.log(user);

        const res = {
            user,
            friend
        }

        return res
    }

    const response = await getUserInfo();
    console.log(response)

    // creates array with friends list
    async function updateFriendsList(response) {

        console.log("updating friends list")

        let friendId = response.friend.id
        let friendsList = response.user.friendsList
        let newFriendsList = [];

        if (friendsList) {
            // convert to array
            friendsList = friendsList.substring(1, friendsList.length - 1).split(',')

            // convert each item to integer
            friendsList.forEach(friend => {
                console.log(friend)
                newFriendsList.push(parseInt(friend));
            })
        }

        newFriendsList.push(friendId)

        console.log(newFriendsList);
        return newFriendsList
    }

    const newFriends = await updateFriendsList(response)
    console.log(newFriends)

    // adds new friend list to logged in user
    const id = await response.user.id

    const putResponse = await fetch(`/api/user/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            friendsList: newFriends
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (putResponse.ok) {

    } else {
        alert(putResponse.statusText);
    }
}

document.querySelector('.add-friend-button').addEventListener('click', addFriendHandler);