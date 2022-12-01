select
    e.*,
    case
        when e.operator = '>' then if(v.value > v2.value, 'true', 'false')
        when e.operator = '=' then if(v.value = v2.value, 'true', 'false')
        when e.operator = '<' then if (v.value < v2.value, 'true', 'false')
    end as value
from
    expressions as e
    join variables as v on e.left_operand = v.name
    join variables as v2 on e.right_operand = v2.name