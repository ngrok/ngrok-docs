package com.todoapp.database

import androidx.room.*
import com.todoapp.models.Category
import kotlinx.coroutines.flow.Flow

/**
 * Data Access Object (DAO) for Category entity
 * Provides database operations for categories
 */
@Dao
interface CategoryDao {

    // Create operations
    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun insertCategory(category: Category): Long

    @Insert
    suspend fun insertCategories(categories: List<Category>)

    // Read operations
    @Query("SELECT * FROM categories WHERE id = :categoryId")
    suspend fun getCategory(categoryId: Long): Category?

    @Query("SELECT * FROM categories ORDER BY name ASC")
    fun getAllCategories(): Flow<List<Category>>

    @Query("SELECT * FROM categories WHERE name = :name")
    suspend fun getCategoryByName(name: String): Category?

    // Update operations
    @Update
    suspend fun updateCategory(category: Category)

    // Delete operations
    @Delete
    suspend fun deleteCategory(category: Category)

    @Query("DELETE FROM categories WHERE id = :categoryId")
    suspend fun deleteCategoryById(categoryId: Long)

    // Count
    @Query("SELECT COUNT(*) FROM categories")
    fun getCategoryCount(): Flow<Int>

    // Backup
    @Query("SELECT * FROM categories")
    suspend fun getAllCategoriesForBackup(): List<Category>
}
