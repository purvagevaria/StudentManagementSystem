async function submitStudent() {
    const id = document.getElementById('student-id').value;
    const firstName = document.getElementById('first_name').value;
    const lastName = document.getElementById('last_name').value;
    const dob = document.getElementById('dob').value;
    const amountDue = document.getElementById('amount_due').value;

    const method = id ? 'PUT' : 'POST';
    const url = id ? `/student/${id}` : '/student';

    const response = await fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ first_name: firstName, last_name: lastName, dob, amount_due: amountDue })
    });

    const result = await response.json();
    document.getElementById('result').innerText = JSON.stringify(result, null, 2);
}

async function getStudent() {
    const id = document.getElementById('retrieve-id').value;
    const response = await fetch(`/student/${id}`);
    const result = await response.json();
    document.getElementById('result').innerText = JSON.stringify(result, null, 2);
}

async function deleteStudent() {
    const id = document.getElementById('retrieve-id').value;
    const response = await fetch(`/student/${id}`, {
        method: 'DELETE'
    });
    const result = await response.json();
    document.getElementById('result').innerText = JSON.stringify(result, null, 2);
}
