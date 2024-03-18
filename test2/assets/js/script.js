$(document).ready(function() {
    $('#single-select').SumoSelect();
    $('#multi-select').SumoSelect({ selectAll: true });

    function changeVal() {
        var singleselectedVal = $('#single-select').val();
        var multiselectedVal = $('#multi-select').val();

        $.ajax({
            url: 'function.php',
            type: 'POST',
            data: { 
                SingleVal: singleselectedVal,
                multiVal: multiselectedVal
            },
            dataType: 'json',
            success: function(response) {
                $('#selected-values').text(response.selectedVal);
            }
        });
    }

    $('#single-select').change(changeVal);
    $('#multi-select').change(changeVal);
});