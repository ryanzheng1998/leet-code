select
    player_id,
    device_id
from
    activity as a
where
    event_date = (
        select
            min(event_date)
        from
            activity
        where
            player_id = a.player_id
    );

--