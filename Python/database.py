from dotenv import load_dotenv, find_dotenv
from pymongo import MongoClient
import os


class MongoDB:
    def __init__(self):
        load_dotenv(find_dotenv())
        uri = os.getenv("URI") + ":" + str(os.getenv("PORT"))
        self.client = MongoClient(uri)
        self.db = self.client[os.getenv("DB")]

    def get_collection(self):
        self.collection = self.db[os.getenv("COLLECTION")]

    def insert_one(self, document):
        result = self.collection.insert_one(document)
        return result.inserted_id

    def delete_one(self, filter):
        result = self.collection.delete_one(filter)
        return result.deleted_count

    def update_one(self, filter, update):
        result = self.collection.update_one(filter, {"$set": update})
        return result.modified_count

    def find_one(self, filter):
        return self.collection.find_one(filter)

    def find_all(self):
        cursor = self.collection.find()
        return list(cursor)

    def find_with_filter(self, filter):
        cursor = self.collection.find(filter)
        return list(cursor)

    def close_connection(self):
        self.client.close()
