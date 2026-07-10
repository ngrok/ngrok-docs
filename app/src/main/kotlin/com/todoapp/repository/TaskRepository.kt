package com.todoapp.repository

import com.todoapp.database.TaskDao
import com.todoapp.models.Task
import kotlinx.coroutines.flow.Flow

/**
 * Repository pattern for Task data operations
 * Acts as a bridge between DAO and ViewModel
 */
class TaskRepository(private val taskDao: TaskDao) {

    // Create
    suspend fun addTask(task: Task): Long {
        return taskDao.insertTask(task)
    }

    suspend fun addTasks(tasks: List<Task>) {
        taskDao.insertTasks(tasks)
    }

    // Read
    fun getAllTasks(): Flow<List<Task>> {
        return taskDao.getAllTasks()
    }

    fun getActiveTasks(): Flow<List<Task>> {
        return taskDao.getActiveTasks()
    }

    fun getCompletedTasks(): Flow<List<Task>> {
        return taskDao.getCompletedTasks()
    }

    fun getOverdueTasks(): Flow<List<Task>> {
        return taskDao.getOverdueTasks()
    }

    fun getTodayTasks(): Flow<List<Task>> {
        return taskDao.getTodayTasks()
    }

    fun getTasksByCategory(categoryId: Long): Flow<List<Task>> {
        return taskDao.getTasksByCategory(categoryId)
    }

    fun getTasksByPriority(priority: Task.Priority): Flow<List<Task>> {
        return taskDao.getTasksByPriority(priority.name)
    }

    fun searchTasks(query: String): Flow<List<Task>> {
        val searchQuery = "%$query%"
        return taskDao.searchTasks(searchQuery)
    }

    suspend fun getTask(taskId: Long): Task? {
        return taskDao.getTask(taskId)
    }

    suspend fun getSubtasks(parentTaskId: Long): List<Task> {
        return taskDao.getSubtasks(parentTaskId)
    }

    // Update
    suspend fun updateTask(task: Task) {
        taskDao.updateTask(task)
    }

    suspend fun updateTaskCompletion(taskId: Long, isCompleted: Boolean) {
        taskDao.updateTaskCompletion(taskId, isCompleted)
    }

    suspend fun updateTaskContent(taskId: Long, title: String, description: String) {
        taskDao.updateTaskContent(taskId, title, description)
    }

    // Delete
    suspend fun deleteTask(task: Task) {
        taskDao.deleteTask(task)
    }

    suspend fun deleteTaskById(taskId: Long) {
        taskDao.deleteTaskById(taskId)
    }

    suspend fun deleteCompletedTasks(): Int {
        return taskDao.deleteCompletedTasks()
    }

    suspend fun deleteOldCompletedTasks(daysAgo: Int): Int {
        val cutoffDate = System.currentTimeMillis() - (daysAgo * 86400000L)
        return taskDao.deleteOldCompletedTasks(cutoffDate)
    }

    // Statistics
    fun getActiveTaskCount(): Flow<Int> {
        return taskDao.getActivTaskCount()
    }

    fun getCompletedTaskCount(): Flow<Int> {
        return taskDao.getCompletedTaskCount()
    }

    fun getOverdueTaskCount(): Flow<Int> {
        return taskDao.getOverdueTaskCount()
    }

    fun getTotalTaskCount(): Flow<Int> {
        return taskDao.getTotalTaskCount()
    }

    // Backup
    suspend fun getAllTasksForBackup(): List<Task> {
        return taskDao.getAllTasksForBackup()
    }
}
