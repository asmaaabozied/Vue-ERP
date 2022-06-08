$(document).ready(function() {

    invoiceSettingInit();

    $('#is_taxed').change(function (){
        if (this.checked){
            $('#is_value_added_taxed_after_luxury').prop('disabled', false);
            $('#is_manual_taxed').prop('disabled', false);
            $('#add_tax_after_discount_addition').prop('disabled', false);
            if ($('#is_manual_taxed').is(':checked'))
                $('#total_or_final').prop('disabled', false);
        }
        else {
            $('#is_value_added_taxed_after_luxury').prop('disabled', true);
            $('#is_manual_taxed').prop('disabled', true);
            $('#add_tax_after_discount_addition').prop('disabled', true);
            $('#total_or_final').prop('disabled', true);
        }


    })

    $('#is_manual_taxed').change(function (){
        if (this.checked)
            $('#total_or_final').prop('disabled', false);
        else
            $('#total_or_final').prop('disabled', true);
    })

    $('#has_inventory, #has_delegate, #has_payment_method, #has_default_price, #has_cost_center, #has_project,' +
        '#has_discount_account, #has_opposite_discount_account, #has_reference, #has_sale_point, #has_account, ' +
        '#has_opposite_account, #has_opposite_account_address, #has_en_opposite_account_address').change(function (e){
        var checkboxId = $(e.target).attr('id');
        if (this.checked) {
            $('.' + checkboxId).prop('disabled', false);
        }
        else
            $('.' + checkboxId).prop('disabled', true);
    });


    function invoiceSettingInit(){
        if (!$('#is_taxed').is(':checked')) {
            $('#is_value_added_taxed_after_luxury').prop('disabled', true);
            $('#is_manual_taxed').prop('disabled', true);
            $('#add_tax_after_discount_addition').prop('disabled', true);
        }
    }

});
