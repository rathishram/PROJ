<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Candy Shop Stock Management</title>
</head>
<body>

<h1>Candy Shop Stock Management</h1>

<!-- Form to add candies -->
<form id="addCandyForm">
    <label for="candyName">Candy Name:</label>
    <input type="text" id="candyName" required>

    <label for="candyDescription">Candy Description:</label>
    <input type="text" id="candyDescription" required>

    <label for="candyQuantity">Quantity:</label>
    <input type="number" id="candyQuantity" min="1" required>

    <button type="button" onclick="addCandy()">Add Candy</button>
</form>

<!-- Candy list -->
<h2>Candy List</h2>
<ul id="candyList"></ul>

<script>
    // Candy data array
    let candies = [];

    // Function to add candy to the list
    function addCandy() {
        const candyName = document.getElementById('candyName').value;
        const candyDescription = document.getElementById('candyDescription').value;
        const candyQuantity = parseInt(document.getElementById('candyQuantity').value);

        if (!candyName || !candyDescription || isNaN(candyQuantity) || candyQuantity <= 0) {
            alert('Please fill in all fields and enter a valid quantity.');
            return;
        }

        const candy = {
            name: candyName,
            description: candyDescription,
            quantity: candyQuantity
        };

        candies.push(candy);

        // Update candy list
        updateCandyList();

        // Clear form fields
        document.getElementById('candyName').value = '';
        document.getElementById('candyDescription').value = '';
        document.getElementById('candyQuantity').value = '';
    }

    // Function to update candy list
    function updateCandyList() {
        const candyList = document.getElementById('candyList');
        candyList.innerHTML = '';

        candies.forEach(candy => {
            const listItem = document.createElement('li');
            listItem.textContent = `${candy.name} - ${candy.description} - Quantity: ${candy.quantity}`;
            candyList.appendChild(listItem);
        });
    }
</script>

</body>
</html>
