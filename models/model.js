'use strict';

var Database = require("./database");
var moment = require('moment');

module.exports = class Model extends Database { 
    
    /*
        @pre: Parent class constructor should be defined
        @param: 
            table {String} - MySQL table name
            primaryKey {String} - MySQL table primarykey
        @post: Return the table result by id
    */
    constructor(table, primaryKey) { 
        super();
        this.table = table;
        this.primaryKey = primaryKey;
    } 

    
    /*
        @pre: table and primary key should be defined
        @param: 
            id {int}
        @post: Return the table result by id
    */
    getById(id) {
        return this.dbQuery('SELECT * FROM ' + this.table + ' WHERE ' + this.primaryKey + ' = ?', [id]);
    }

    /*
        @pre: table and primary key should be defined
        @param: 
            orderBy {String} Order by ASC/DESC
        @post: Return all the table result
    */
    getAll(orderBy="DESC") {
        return this.dbQuery('SELECT * FROM ' + this.table + ' ORDER BY ' + this.primaryKey + ' ' + orderBy);
    }


    /*
        @param:
            dataArray {Array} : MultiDimension array 
        Return db insertion status
    */
    insert(dataArray) {

        let tableColumn = '';
        let tableColumnParam = '';
        let tableColumnValue = [];

        for (let i in dataArray) {
            tableColumn += i + ' ,'
            tableColumnParam += '? ,'
            tableColumnValue.push(dataArray[i]);
        }

        tableColumn += 'created_at ,'
        tableColumnParam += '? ,'
        tableColumnValue.push(moment(new Date()).format("YYYY-MM-DD HH:mm:ss"));

        tableColumn = tableColumn.slice(0, -1);
        tableColumnParam = tableColumnParam.slice(0, -1);

        return this.dbQuery('INSERT INTO ' + this.table + ' ('+ tableColumn +') VALUES ('+ tableColumnParam +')', tableColumnValue);
    }

    /*
        @param:
            dataArray {Array} : MultiDimension array - update column and values
            whereDataArray {Array} : MultiDimension array - where column and values
        Return db insertion status
    */
   update(dataArray, whereDataArray) {

        let tableColumn = '';
        let tableColumnValue = [];

        // Set column loop
        for (let i in dataArray) {
            tableColumn += i + ' =?, '
            tableColumnValue.push(dataArray[i]);
        }

        tableColumn = tableColumn.slice(0, -2);

        //----

        // Where query merge
        let tableWhereColumn = '';

        for (let i in whereDataArray) {
            tableWhereColumn += i + ' =?, '
            tableColumnValue.push(whereDataArray[i]);
        }

        tableWhereColumn = tableWhereColumn.slice(0, -2);

        return this.dbQuery('UPDATE  ' + this.table + ' SET ' + tableColumn + ' WHERE ' + tableWhereColumn, tableColumnValue);
    }


    /*
        @pre: table and primary key should be defined
        @param: 
            id {int} 
        @post: Delete record from table
    */
    delete(id) {
        if (id == undefined || id == '') 
            return this.dbQuery('DELETE FROM ' + this.table); // delete all records
        else 
            return this.dbQuery('DELETE FROM ' + this.table + ' WHERE ' + this.primaryKey + ' = ?', [id]); // delete by id
    }



     /*
        @param:
            dataArray {Array} : MultiDimension array - select column and values
            whereDataArray {Array} : MultiDimension array - where column and values
        Return db insertion status
    */
   where(dataArray, whereDataArray) {

        let tableColumn = '';
        let tableColumnValue = [];

        for (let i in dataArray) {
            tableColumn += dataArray[i] + ', '
        }

        tableColumn = tableColumn.slice(0, -2);
        //----

        let tableWhereColumn = '';

        for (let i in whereDataArray) {
            tableWhereColumn += i + ' =?, '
            tableColumnValue.push(whereDataArray[i]);
        }

        tableWhereColumn = tableWhereColumn.slice(0, -2);

        return this.dbQuery('SELECT  ' + tableColumn + ' FROM ' + this.table + '  WHERE ' + tableWhereColumn, tableColumnValue);
    }
 }
