import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import Product from '../../models/product';

const ProductsOverviewScreen = (props) => {
  const products = useSelector((state) => state.products.availableProducts);
  return (
    <FlatList
      data={products}
      keyExtractor={(item, index) => item.id}
      renderItem={(itemData) => <Text>{itemData.item.title}</Text>}
    />
  );
};

ProductsOverviewScreen.navigationOptions = {
  headerTitle: 'All Products'
};

const styles = StyleSheet.create({});

export default ProductsOverviewScreen;
