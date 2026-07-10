package com.todoapp.database

import androidx.room.*
import com.todoapp.models.Task
import kotlinx.coroutines.flow.Flow

/**
 * Data Access Object (DAO) for Task entity
 * Provides database operations for tasks
 */
@Dao
interface TaskDao {

    // Create operations
    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun insertTask(task: Task): Long

    @Insert
    suspend fun insertTasks(tasks: List<Task>)

    // Read operations
    @Query("SELECT * FROM tasks WHERE id = :taskId")
    suspend fun getTask(taskId: Long): Task?

    @Query("SELECT * FROM tasks WHERE parent_task_id IS NULL ORDER BY due_date ASC, priority DESC")
    fun getAllTasks(): Flow<List<Task>>

    @Query("SELECT * FROM tasks WHERE is_completed = 0 AND parent_task_id IS NULL ORDER BY due_date ASC, priority DESC")
    fun getActiveTasks(): Flow<List<Task>>

    @Query("SELECT * FROM tasks WHERE is_completed = 1 AND parent_task_id IS NULL ORDER BY updated_at DESC")
    fun getCompletedTasks(): Flow<List<Task>>

    @Query("""SELECT * FROM tasks 
        WHERE parent_task_id IS NULL 
        AND is_completed = 0 
        AND due_date IS NOT NULL 
        AND due_date < :currentTime 
        ORDER BY due_date ASC""")
    fun getOverdueTasks(currentTime: Long = System.currentTimeMillis()): Flow<List<Task>>

    @Query("""SELECT * FROM tasks 
        WHERE parent_task_id IS NULL 
        AND is_completed = 0 
        AND due_date IS NOT NULL 
        AND DATE(due_date/1000, 'unixepoch') = DATE(:date/1000, 'unixepoch') 
        ORDER BY priority DESC""")
    fun getTodayTasks(date: Long = System.currentTimeMillis()): Flow<List<Task>>

    @Query("SELECT * FROM tasks WHERE category_id = :categoryId AND parent_task_id IS NULL ORDER BY due_date ASC")
    fun getTasksByCategory(categoryId: Long): Flow<List<Task>>

    @Query("SELECT * FROM tasks WHERE priority = :priority AND is_completed = 0 AND parent_task_id IS NULL ORDER BY due_date ASC")
    fun getTasksByPriority(priority: String): Flow<List<Task>>

    @Query("""SELECT * FROM tasks 
        WHERE (title LIKE :searchQuery OR description LIKE :searchQuery) 
        AND parent_task_id IS NULL 
        ORDER BY due_date ASC""")
    fun searchTasks(searchQuery: String): Flow<List<Task>>

    @Query("SELECT * FROM tasks WHERE parent_task_id = :parentTaskId ORDER BY created_at ASC")
    suspend fun getSubtasks(parentTaskId: Long): List<Task>

    // Update operations
    @Update
    suspend fun updateTask(task: Task)

    @Query("UPDATE tasks SET is_completed = :isCompleted, updated_at = :updatedAt WHERE id = :taskId")
    suspend fun updateTaskCompletion(taskId: Long, isCompleted: Boolean, updatedAt: Long = System.currentTimeMillis())

    @Query("UPDATE tasks SET title = :title, description = :description WHERE id = :taskId")
    suspend fun updateTaskContent(taskId: Long, title: String, description: String)

    // Delete operations
    @Delete
    suspend fun deleteTask(task: Task)

    @Query("DELETE FROM tasks WHERE id = :taskId")
    suspend fun deleteTaskById(taskId: Long)

    @Query("DELETE FROM tasks WHERE is_completed = 1")
    suspend fun deleteCompletedTasks(): Int

    @Query("DELETE FROM tasks WHERE due_date < :cutoffDate AND is_completed = 1")
    suspend fun deleteOldCompletedTasks(cutoffDate: Long): Int

    // Statistics
    @Query("SELECT COUNT(*) FROM tasks WHERE is_completed = 0 AND parent_task_id IS NULL")
    fun getActivTaskCount(): Flow<Int>

    @Query("SELECT COUNT(*) FROM tasks WHERE is_completed = 1 AND parent_task_id IS NULL")
    fun getCompletedTaskCount(): Flow<Int>

    @Query("""SELECT COUNT(*) FROM tasks 
        WHERE is_completed = 0 
        AND due_date IS NOT NULL 
        AND due_date < :currentTime 
        AND parent_task_id IS NULL""")
    fun getOverdueTaskCount(currentTime: Long = System.currentTimeMillis()): Flow<Int>

    @Query("SELECT COUNT(*) FROM tasks WHERE parent_task_id IS NULL")
    fun getTotalTaskCount(): Flow<Int>

    // Backup & Sync
    @Query("SELECT * FROM tasks")
    suspend fun getAllTasksForBackup(): List<Task>
}
