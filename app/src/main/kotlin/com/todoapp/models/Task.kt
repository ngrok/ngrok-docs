package com.todoapp.models

import androidx.room.Entity
import androidx.room.ForeignKey
import androidx.room.PrimaryKey
import java.util.*

/**
 * Task data model
 * Represents a single to-do item with all metadata
 */
@Entity(
    tableName = "tasks",
    foreignKeys = [
        ForeignKey(
            entity = Category::class,
            parentColumns = ["id"],
            childColumns = ["category_id"],
            onDelete = ForeignKey.CASCADE
        )
    ]
)
data class Task(
    @PrimaryKey(autoGenerate = true)
    val id: Long = 0,
    val title: String,
    val description: String = "",
    val categoryId: Long? = null,
    val priority: Priority = Priority.MEDIUM,
    val dueDate: Long? = null, // milliseconds since epoch
    val isCompleted: Boolean = false,
    val createdAt: Long = System.currentTimeMillis(),
    val updatedAt: Long = System.currentTimeMillis(),
    val reminderTime: Long? = null,
    val isRecurring: Boolean = false,
    val recurrencePattern: String? = null, // "daily", "weekly", "monthly"
    val parentTaskId: Long? = null, // For subtasks
    val subtasks: List<Task> = emptyList() // Not stored in DB, populated from queries
) {
    enum class Priority {
        LOW, MEDIUM, HIGH
    }

    fun isOverdue(): Boolean {
        return !isCompleted && dueDate != null && dueDate < System.currentTimeMillis()
    }

    fun isDueToday(): Boolean {
        if (dueDate == null) return false
        val calendar = Calendar.getInstance()
        val today = calendar.apply { set(Calendar.HOUR_OF_DAY, 0); set(Calendar.MINUTE, 0); set(Calendar.SECOND, 0) }.timeInMillis
        val tomorrow = today + 86400000 // 24 hours in milliseconds
        return dueDate >= today && dueDate < tomorrow
    }

    fun getDaysUntilDue(): Int {
        if (dueDate == null) return -1
        val now = System.currentTimeMillis()
        return ((dueDate - now) / 86400000).toInt()
    }
}
