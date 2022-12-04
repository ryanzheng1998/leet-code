select
    distinct l.page_id as recommended_page
from
    friendship as f
    join likes as l on f.user2_id = l.user_id
where
    f.user1_id = 1
    and l.page_id not in (
        select
            page_id
        from
            likes
        where
            user_id = 1
    )