import React, { useState } from 'react';
import { View, Text, Image, Button, Modal, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import MyProduct from './MyProduct'; // Adjust the path as necessary
import AddNewProduct from './AddNewProduct'; // Adjust the path as necessary

export default function ShopPage({ route }) {
  const [showModal, setShowModal] = useState(false);
  const { shop } = route.params; // Assuming shop details are passed via navigation

  const handleModalClose = () => setShowModal(false);
  const handleViewAllClick = () => setShowModal(true);

  const extractTimeWithAMPM = (dateString) => {
    const date = new Date(dateString);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const hour12 = hours % 12 || 12;
    const formattedHours = hour12.toString().padStart(2, "0");
    const formattedMinutes = minutes.toString().padStart(2, "0");
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  };

  const start = extractTimeWithAMPM(shop?.openingHours.start);
  const end = extractTimeWithAMPM(shop?.openingHours.end);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <View style={styles.backgroundPic}></View>
        <View style={styles.headerContent}>
          <Image source={{ uri: shop.imageUrl }} style={styles.dp} />
          <View style={styles.textContainer}>
            <Text style={styles.textLg}>{shop?.name}</Text>
            <Text style={styles.textSm}>{shop?.description}</Text>
          </View>
        </View>
        <View style={styles.description}>
          <Text>
            <Text style={styles.boldText}>Address:</Text> {shop?.address}
          </Text>
          <Text>
            <Text style={styles.boldText}>Opening Hours:</Text> {shop?.openingHours ? `Monday - Friday, ${start} - ${end}` : "Monday - Friday, 9:00 AM - 6:00 PM"}
          </Text>
          <Text>
            <Text style={styles.boldText}>Email:</Text> {shop?.email}
          </Text>
          <Text>
            <Text style={styles.boldText}>Phone:</Text> {shop?.phone}
          </Text>
        </View>
      </View>
      <View style={styles.productSection}>
        <TouchableOpacity onPress={handleViewAllClick} style={styles.addButton}>
          <Text style={styles.addButtonText}>Add New Product</Text>
        </TouchableOpacity>
        <MyProduct refresh={handleModalClose} />
      </View>
      <Modal visible={showModal} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add new Product</Text>
            <AddNewProduct close={handleModalClose} />
            <Button title="Close" onPress={handleModalClose} />
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  backgroundPic: {
    height: 200,
    backgroundColor: '#ccc',
    marginBottom: 10,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dp: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  textLg: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textSm: {
    fontSize: 14,
    color: '#666',
  },
  description: {
    marginTop: 10,
  },
  boldText: {
    fontWeight: 'bold',
  },
  productSection: {
    marginTop: 20,
  },
  addButton: {
    backgroundColor: '#088178',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
