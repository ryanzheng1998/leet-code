select
    stock_name,
    sum(if(operation = 'buy', -1, 1) * price) as capital_gain_loss
from
    stocks
group by
    stock_name