import React from 'react';
import MySelect from './UI/select/MySelect';

const PostFilter = ({ filter, setFilter }) => {
    return (
        <div>
            <input
                value={filter.query}
                onChange={(e) => setFilter({ ...filter, query: e.target.value })}
                placeholder='Поиск' />
            <MySelect
                defaultValue={'Сортировка по ...'}
                value={filter.sort}
                onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
                options={[
                    { name: 'Сортировка по названию', value: 'title' },
                    { name: 'Сортировка по описанию', value: 'body' }
                ]} />
        </div>
    );
};

export default PostFilter;