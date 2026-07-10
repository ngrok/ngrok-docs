package com.todoapp.repository

import com.todoapp.database.CategoryDao
import com.todoapp.models.Category
import kotlinx.coroutines.flow.Flow

/**
 * Repository pattern for Category data operations
 */
class CategoryRepository(private val categoryDao: CategoryDao) {

    // Create
    suspend fun addCategory(category: Category): Long {
        return categoryDao.insertCategory(category)
    }

    suspend fun addCategories(categories: List<Category>) {
        categoryDao.insertCategories(categories)
    }

    // Read
    fun getAllCategories(): Flow<List<Category>> {
        return categoryDao.getAllCategories()
    }

    suspend fun getCategory(categoryId: Long): Category? {
        return categoryDao.getCategory(categoryId)
    }

    suspend fun getCategoryByName(name: String): Category? {
        return categoryDao.getCategoryByName(name)
    }

    // Update
    suspend fun updateCategory(category: Category) {
        categoryDao.updateCategory(category)
    }

    // Delete
    suspend fun deleteCategory(category: Category) {
        categoryDao.deleteCategory(category)
    }

    suspend fun deleteCategoryById(categoryId: Long) {
        categoryDao.deleteCategoryById(categoryId)
    }

    // Count
    fun getCategoryCount(): Flow<Int> {
        return categoryDao.getCategoryCount()
    }

    // Backup
    suspend fun getAllCategoriesForBackup(): List<Category> {
        return categoryDao.getAllCategoriesForBackup()
    }
}
