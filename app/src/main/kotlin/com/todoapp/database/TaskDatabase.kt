package com.todoapp.database

import android.content.Context
import androidx.room.Database
import androidx.room.Room
import androidx.room.RoomDatabase
import androidx.room.migration.Migration
import androidx.sqlite.db.SupportSQLiteDatabase
import com.todoapp.models.Category
import com.todoapp.models.Task

/**
 * Room Database for Todo App
 * Handles all local database operations
 */
@Database(
    entities = [Task::class, Category::class],
    version = 1,
    exportSchema = true
)
abstract class TaskDatabase : RoomDatabase() {

    abstract fun taskDao(): TaskDao
    abstract fun categoryDao(): CategoryDao

    companion object {
        private const val DATABASE_NAME = "todo_app_database"
        private var instance: TaskDatabase? = null
        private val LOCK = Any()

        fun getInstance(context: Context): TaskDatabase {
            return instance ?: synchronized(LOCK) {
                instance ?: createDatabase(context).also { instance = it }
            }
        }

        private fun createDatabase(context: Context): TaskDatabase {
            return Room.databaseBuilder(
                context.applicationContext,
                TaskDatabase::class.java,
                DATABASE_NAME
            )
                .addCallback(DatabaseCallback())
                .addMigrations()
                .fallbackToDestructiveMigration()
                .build()
        }

        private fun addMigrations(): Array<Migration> {
            return emptyArray() // Add migrations as needed for future versions
        }
    }

    private class DatabaseCallback : Callback() {
        override fun onCreate(db: SupportSQLiteDatabase) {
            super.onCreate(db)
            // Pre-populate default categories
        }
    }
}
