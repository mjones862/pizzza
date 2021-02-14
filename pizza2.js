$(document).ready(
    function () {
        $("#tabs a").click(showTab);
        function showTab(event) {
            event.preventDefault();
            $(this).tab("show");
        }
        $(document).ready(function() {
            $("submit".click(function() {
                var v = $("#size").serializeArray();
                $.each(v. function(i, field) {
                    $("#confirmation").append(field.name + ":" + field.value + " ");
                })
                var w = $("#crust").serializeArray();
                $.each(w. function(i, field) {
                    $("#confirmation").append(field.name + ":" + field.value + " ");
                })
                var x = $("#meat").serializeArray();
                $.each(x. function(i, field) {
                    $("#confirmation").append(field.name + ":" + field.value + " ");
                })
                var y = $("#veggies").serializeArray();
                $.each(y. function(i, field) {
                    $("#confirmation").append(field.name + ":" + field.value + " ");
                })
                var z = $("#delivery").serializeArray();
                $.each(z. function(i, field) {
                    $("#confirmation").append(field.name + ":" + field.value + " ");
                })

            })
            var meat = $("#meat");
            meat.each(function(meat * 1.50))
            var veggies = $("#veggies");
            veggies.each(function(veggies * 1.00))
            var small = (#small + 7);
            var medium = (#medium + 9);
            var large = (#large + 12);
            var subtot = $(document.getElementById("size") + meat + veggies))
            var calc = (subtot * .051);
            var tax = (subtot - calc);

            ;
        })