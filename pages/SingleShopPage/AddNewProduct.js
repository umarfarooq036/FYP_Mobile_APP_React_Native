import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';
import CustomTagInput from './CustomTagInput';

export default function AddNewProduct({ close }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    stockQuantity: '',
    imageURL: '',
    brand: '',
    weight: '',
    length: '',
    width: '',
    height: '',
    color: '',
    material: '',
    keywords: [],
    rating: '',
    discounts: '',
    availabilityStatus: 'available',
    vendorId: '',
  });
  const [tags, setTags] = useState([]);
  const [suggestions] = useState([
    { id: 'electronics', text: 'Electronics' },
    { id: 'clothing', text: 'Clothing' },
    { id: 'home', text: 'Home' },
  ]);

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const dataToSubmit = {
        ...formData,
        price: parseFloat(formData.price) || 0,
        stockQuantity: parseInt(formData.stockQuantity) || 0,
        length: parseFloat(formData.length) || 0,
        width: parseFloat(formData.width) || 0,
        height: parseFloat(formData.height) || 0,
        rating: parseFloat(formData.rating) || 0,
        keywords: tags,
      };
      await axios.post('http://localhost:3002/products/', dataToSubmit);
      close();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <View style={styles.formGroup}>
        <Text style={styles.label}>Name:</Text>
        <TextInput
          style={styles.input}
          value={formData.name}
          onChangeText={(text) => handleChange('name', text)}
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Price:</Text>
        <TextInput
          style={styles.input}
          value={formData.price}
          onChangeText={(text) => handleChange('price', text)}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Stock Quantity:</Text>
        <TextInput
          style={styles.input}
          value={formData.stockQuantity}
          onChangeText={(text) => handleChange('stockQuantity', text)}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Description:</Text>
        <TextInput
          style={styles.input}
          value={formData.description}
          onChangeText={(text) => handleChange('description', text)}
          multiline
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Category:</Text>
        <TextInput
          style={styles.input}
          value={formData.category}
          onChangeText={(text) => handleChange('category', text)}
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Brand:</Text>
        <TextInput
          style={styles.input}
          value={formData.brand}
          onChangeText={(text) => handleChange('brand', text)}
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Image URL:</Text>
        <TextInput
          style={styles.input}
          value={formData.imageURL}
          onChangeText={(text) => handleChange('imageURL', text)}
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Weight:</Text>
        <TextInput
          style={styles.input}
          value={formData.weight}
          onChangeText={(text) => handleChange('weight', text)}
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Length:</Text>
        <TextInput
          style={styles.input}
          value={formData.length}
          onChangeText={(text) => handleChange('length', text)}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Width:</Text>
        <TextInput
          style={styles.input}
          value={formData.width}
          onChangeText={(text) => handleChange('width', text)}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Height:</Text>
        <TextInput
          style={styles.input}
          value={formData.height}
          onChangeText={(text) => handleChange('height', text)}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Discounts:</Text>
        <TextInput
          style={styles.input}
          value={formData.discounts}
          onChangeText={(text) => handleChange('discounts', text)}
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Rating:</Text>
        <TextInput
          style={styles.input}
          value={formData.rating}
          onChangeText={(text) => handleChange('rating', text)}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Keywords:</Text>
        <CustomTagInput tags={tags} setTags={setTags} suggestions={suggestions} />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Color:</Text>
        <TextInput
          style={styles.input}
          value={formData.color}
          onChangeText={(text) => handleChange('color', text)}
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Material:</Text>
        <TextInput
          style={styles.input}
          value={formData.material}
          onChangeText={(text) => handleChange('material', text)}
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Availability Status:</Text>
        <TextInput
          style={styles.input}
          value={formData.availabilityStatus}
          onChangeText={(text) => handleChange('availabilityStatus', text)}
        />
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  submitButton: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
