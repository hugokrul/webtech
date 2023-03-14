<script>


document.getElementById("parent").addEventListener("click", function(e) {
  console.log("Parent element clicked")}
);

document.getElementById("child").addEventListener("click", function(e) {
  console.log("Child element clicked")}
  e.stopPropagation(); 
);

function showAlert() {
  alert('Hello World!')
  }

</script>