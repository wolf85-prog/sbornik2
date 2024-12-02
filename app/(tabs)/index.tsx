import { Text, View, StyleSheet } from "react-native";
import { Link, Href } from 'expo-router';
import { Image } from 'expo-image';
import ImageViewer from "./../../components/ImageViewer";
import Button from './../../components/Button';

import * as SQLite from 'expo-sqlite';
import { useState, useEffect } from 'react';

const ABOUT = "/about" as Href

const PlaceholderImage = require('@/assets/images/background-image.png');


export default function Index() {
  
  const [isLoading, setIsLoading] = useState(true);
  const [names, setNames] = useState([]);
  const [currentName, setCurrentName] = useState(undefined);

  //const [db, setDb] = useState(SQLite.openDatabaseAsync('example.db'));
  
  //const db = await SQLite.openDatabaseAsync('databaseName');

  // `execAsync()` is useful for bulk queries when you want to execute altogether.
  // Please note that `execAsync()` does not escape parameters and may lead to SQL injection.
  // await db.execAsync(`
  //   PRAGMA journal_mode = WAL;
  //   CREATE TABLE IF NOT EXISTS test (id INTEGER PRIMARY KEY NOT NULL, value TEXT NOT NULL, intValue INTEGER);
  //   INSERT INTO test (value, intValue) VALUES ('test1', 123);
  //   INSERT INTO test (value, intValue) VALUES ('test2', 456);
  //   INSERT INTO test (value, intValue) VALUES ('test3', 789);
  // `);

  // `runAsync()` is useful when you want to execute some write operations.
  // const result = await db.runAsync('INSERT INTO test (value, intValue) VALUES (?, ?)', 'aaa', 100);
  // console.log(result.lastInsertRowId, result.changes);
  // await db.runAsync('UPDATE test SET intValue = ? WHERE value = ?', 999, 'aaa'); // Binding unnamed parameters from variadic arguments
  // await db.runAsync('UPDATE test SET intValue = ? WHERE value = ?', [999, 'aaa']); // Binding unnamed parameters from array
  // await db.runAsync('DELETE FROM test WHERE value = $value', { $value: 'aaa' }); // Binding named parameters from object

  // `getFirstAsync()` is useful when you want to get a single row from the database.
  //const firstRow = await db.getFirstAsync('SELECT * FROM test');
  //console.log(firstRow.id, firstRow.value, firstRow.intValue);

  // `getAllAsync()` is useful when you want to get all results as an array of objects.
  //const allRows = await db.getAllAsync('SELECT * FROM test');
  // for (const row of allRows) {
  //   console.log(row.id, row.value, row.intValue);
  // }

  // `getEachAsync()` is useful when you want to iterate SQLite query cursor.
  // for await (const row of db.getEachAsync('SELECT * FROM test')) {
  //   console.log(row.id, row.value, row.intValue);
  // }


  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Loading names...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Choose a photo" />
        <Button label="Use this photo" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});