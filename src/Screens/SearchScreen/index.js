import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import SearchInput from '../../Components/SearchInput';
import ListItem from '../../Components/ListItem';
import styles from './styles';

const SearchScreen = () => {
  const [response, setResponse] = useState([]);
  const [search, setSearch] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  const clearBtnPress = () => {
    setSearch('');
  };

  const getData = async () => {
    setRefreshing(true);
    try {
      await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => {
          if (search.trim() !== '') {
            const lowerCaseSearchTerm = search.toLowerCase();
            const filteredPosts = json.filter(post => {
              const rgx = new RegExp(`.*${lowerCaseSearchTerm}.*`);
              const title = post.title.toLowerCase();
              const body = post.body.toLowerCase();
              return rgx.test(title) || rgx.test(body);
            });
            setResponse(filteredPosts);
          } else {
            setResponse(json);
          }
        });
    } finally {
      setRefreshing(false);
    }
  };

  useEffect(() => {
    getData();
  }, [search]);

  const renderEmpty = () => {
    if (refreshing) {
      return null;
    }
    return <Text style={styles.textStyle}>No Post Found!</Text>;
  };

  const renderItem = ({item}) => {
    return <ListItem title={item?.title} body={item?.body} />;
  };

  return (
    <View style={styles.container}>
      <SearchInput
        placeholder="Search here...."
        style={styles.inputContainer}
        value={search}
        onChangeText={setSearch}
        onSubmitEditing={getData}
        cross={search !== ''}
        clearBtnPress={clearBtnPress}
      />
      <FlatList
        data={response}
        keyExtractor={item => item?.id}
        renderItem={renderItem}
        ListEmptyComponent={renderEmpty}
        showsVerticalScrollIndicator={false}
        refreshing={refreshing}
        onRefresh={getData}
      />
    </View>
  );
};

export default SearchScreen;
