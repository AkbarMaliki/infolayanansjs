<template>
    <div>
        <table  class="table table-sm  table-striped table-hover">
            <tr>
                <th order="2">name</th>
                <th order="3">gender</th>
                <th order="1">birthdate</th>
            </tr>
            <tr>
                <td>taufik</td>
                <td>laki</td>
                <td>oktober</td>
            </tr>
             <tr>
                <td>taufik</td>
                <td>laki</td>
                <td>oktober</td>
            </tr>
             <tr>
                <td>taufik</td>
                <td>laki</td>
                <td>oktober</td>
            </tr>
        </table>
    </div>
</template>
<script>
export default{
    mounted() {
    const colOrder = {}
    $('th').each(function(i){
        colOrder[i] = parseInt( $(this).attr('order') );
    });
    $('tr').html(function(i){
        return $(this).children().sort(function(a,b){
        const aOrder = colOrder[$(a).index()],
                bOrder = colOrder[$(b).index()];
        return aOrder - bOrder;
        });
    });
}
}
</script>